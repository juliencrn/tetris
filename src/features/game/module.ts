import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Quarter, Shape, Location, Drawn } from '../../common/types'
import { unit, canvasSize } from '../../common/config'
import { getShape } from './shapes'

interface UserState {
    currentShape?: Shape
    isPlaying: boolean
    shapes: Shape[]
    drawn: Drawn[]
}

const initialState: UserState = {
    currentShape: undefined,
    shapes: [],
    isPlaying: false,
    drawn: [],
}

const game = createSlice({
    name: 'game',
    initialState,
    reducers: {
        createShape(state, action: PayloadAction<Shape>) {
            if (!state.isPlaying) {
                state.isPlaying = true
            }

            // Archive current shape in "static shapes array"
            if (typeof state.currentShape !== 'undefined') {
                state.shapes = [state.currentShape, ...state.shapes]
            }

            // Get all drawn cases (for x & y axis)
            let allDrawn: Location[] = []
            action.payload.rects.forEach(({ x, y, sx, sy }) => {
                // Drawn in x axis
                const xCount = sx / unit
                for (let i = 0; i < xCount; i++) {
                    allDrawn = [...allDrawn, { x: i * unit + x, y }]
                }

                // Drawn in y axis
                const yCount = sy / unit
                for (let i = 0; i < yCount; i++) {
                    allDrawn = [...allDrawn, { x, y: i * unit + y }]
                }
            })

            // Remove doubles and add location key (ex: x-y => 5-1)
            const filteredDrawn = allDrawn.reduce(
                (prev: Drawn[], curr: Location) => {
                    const key = `${curr.x / unit}-${curr.y / unit}`
                    if (!prev) {
                        return [
                            {
                                location: curr,
                                key,
                            },
                        ]
                    }

                    if (prev.filter((item) => item.key === key).length === 0) {
                        return [
                            ...prev,
                            {
                                location: curr,
                                key,
                            },
                        ]
                    }

                    return prev
                },
                [] as Drawn[],
            )

            console.log({ allDrawn, filteredDrawn })

            // Set the new shape from payload
            state.currentShape = action.payload
            state.drawn = filteredDrawn
        },
        resetGame() {
            return initialState
        },
        rotate(state) {
            if (!state?.currentShape) {
                return state
            }

            const { location, type } = state.currentShape

            const quarterToNum = Number(state.currentShape.quarter)
            const quarter = `${
                quarterToNum < 3 ? quarterToNum + 1 : 0
            }` as Quarter

            // It can be without the canvas area
            const shape = getShape({ location, type, quarter })

            // Right wall touched
            if (location.x >= canvasSize.width - shape.width) {
                shape.location.x = canvasSize.width - shape.width
            }

            state.currentShape = shape
        },
        moveLeft(state) {
            if (!state?.currentShape) {
                return state
            }

            const shape = state.currentShape
            const { x } = shape.location

            // Left wall touched
            if (x <= 0) {
                return state
            }

            state.currentShape.location.x = x - unit
        },
        moveRight(state) {
            if (!state?.currentShape) {
                return state
            }

            const shape = state.currentShape
            const { x } = shape.location

            // Right wall touched
            if (x >= canvasSize.width - shape.width) {
                return state
            }

            state.currentShape.location.x = x + unit
        },
        moveBottom(state) {
            if (!state?.currentShape) {
                return state
            }

            const shape = state.currentShape
            const { y } = shape.location

            // Bottom touched
            if (y >= canvasSize.height - shape.height) {
                return state
            }

            state.currentShape.location.y = y + unit
        },
    },
})

export const {
    createShape,
    resetGame,
    rotate,
    moveLeft,
    moveRight,
    moveBottom,
} = game.actions

export default game.reducer
