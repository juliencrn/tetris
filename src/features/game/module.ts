import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ShapeOptions, Quarter } from '../../common/types'
import { unit, canvasSize } from '../../common/config'

interface UserState {
    currentShape?: ShapeOptions
    isPlaying: boolean
    shapes: ShapeOptions[]
}

const initialState: UserState = {
    currentShape: undefined,
    shapes: [],
    isPlaying: false,
}

const game = createSlice({
    name: 'game',
    initialState,
    reducers: {
        createShape(state, action: PayloadAction<ShapeOptions>) {
            if (!state.isPlaying) {
                state.isPlaying = true
            }

            // Archive current shape in "static shapes array"
            if (typeof state.currentShape !== 'undefined') {
                state.shapes = [state.currentShape, ...state.shapes]
            }

            // Set the new shape from payload
            state.currentShape = action.payload
        },
        resetGame() {
            return initialState
        },
        rotate(state) {
            if (!state?.currentShape) {
                return state
            }

            const quarterToNum = Number(state.currentShape.quarter)
            const newQuarter: number = quarterToNum < 3 ? quarterToNum + 1 : 0
            state.currentShape.quarter = newQuarter.toString() as Quarter
        },
        moveLeft(state) {
            if (!state?.currentShape) {
                return state
            }

            const { x } = state.currentShape.location
            state.currentShape.location.x = x - unit
        },
        moveRight(state) {
            if (!state?.currentShape) {
                return state
            }

            const { x } = state.currentShape.location
            state.currentShape.location.x = x + unit
        },
        moveBottom(state) {
            if (!state?.currentShape) {
                return state
            }

            state.currentShape.location.y = canvasSize.width - 2 * unit
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
