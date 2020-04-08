import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Shape, Drawn, ShapeOptions } from '../../common/types'
import { unit, canvasSize } from '../../common/config'

import { getShape } from './shapes'
import * as data from './data'
import {
    incrementQuarter,
    makeShapeDrawn,
    filterDrawn,
    shapeTouchedDrawn,
} from './utils'

interface UserState {
    currentShape?: Shape
    isPlaying: boolean
    shapes: Shape[]
    drawn: Drawn[]
}

const initialState: UserState = {
    currentShape: undefined,
    shapes: data.shapes,
    isPlaying: false,
    drawn: data.drawn,
}

const game = createSlice({
    name: 'game',
    initialState,
    reducers: {
        createShape(state, { payload }: PayloadAction<ShapeOptions>) {
            if (!state.isPlaying) {
                state.isPlaying = true
            }

            // Archive current shape in "static shapes array"
            if (typeof state.currentShape !== 'undefined') {
                state.shapes = [state.currentShape, ...state.shapes]
            }

            const shape = {
                ...getShape(payload),
                uid: state.shapes.length.toString(),
            }

            // Set the new shape from payload
            state.currentShape = shape

            // Add drawn cases
            state.drawn.push(...makeShapeDrawn(shape))
        },
        resetGame() {
            return initialState
        },
        rotate(state) {
            if (!state?.currentShape) {
                return state
            }

            const { location, width } = state.currentShape

            const shape: Shape = {
                uid: state.currentShape.uid,
                ...getShape({
                    ...state.currentShape,
                    quarter: incrementQuarter(state.currentShape.quarter),
                    // Update location if the shape exceeds the canvas
                    location:
                        location.x >= canvasSize.width - width
                            ? {
                                  ...location,
                                  x: canvasSize.width - width - unit,
                              }
                            : location,
                }),
            }

            // Update drawn (remove current then push new location)
            const filteredDrawn = filterDrawn(shape.uid, state.drawn)
            const drawn = [...filteredDrawn, ...makeShapeDrawn(shape)]

            state.drawn = drawn
            state.currentShape = shape
        },
        moveLeft(state) {
            if (!state?.currentShape) {
                return state
            }

            const { location } = state.currentShape

            // Left wall touched
            if (location.x <= 0) {
                return state
            }

            // Update location
            const shape: Shape = {
                uid: state.currentShape.uid,
                ...getShape({
                    ...state.currentShape,
                    location: {
                        ...location,
                        x: location.x - unit,
                    },
                }),
            }

            // check if the shape collides other shape
            if (shapeTouchedDrawn(shape, state.drawn, 'left')) {
                return state
            }

            // Update drawn (remove current then push new location)
            const filteredDrawn = filterDrawn(shape.uid, state.drawn)
            const drawn = [...filteredDrawn, ...makeShapeDrawn(shape)]

            state.drawn = drawn
            state.currentShape = shape
        },
        moveRight(state) {
            if (!state?.currentShape) {
                return state
            }

            const { location } = state.currentShape

            // Right wall touched
            if (location.x >= canvasSize.width - state.currentShape.width) {
                return state
            }

            // Update location
            const shape: Shape = {
                uid: state.currentShape.uid,
                ...getShape({
                    ...state.currentShape,
                    location: {
                        ...location,
                        x: location.x + unit,
                    },
                }),
            }

            // check if the shape collides other shape
            if (shapeTouchedDrawn(shape, state.drawn, 'right')) {
                return state
            }

            // Update drawn (remove current then push new location)
            const filteredDrawn = filterDrawn(shape.uid, state.drawn)
            const drawn = [...filteredDrawn, ...makeShapeDrawn(shape)]

            state.drawn = drawn
            state.currentShape = shape
        },
        moveBottom(state) {
            if (!state?.currentShape) {
                return state
            }

            const { location } = state.currentShape

            // Bottom touched
            if (location.y >= canvasSize.height - state.currentShape.height) {
                return state
            }

            // check if the shape collides other shape
            if (shapeTouchedDrawn(state.currentShape, state.drawn, 'bottom')) {
                // Archive then remove the currentShape
                state.shapes = [...state.shapes, state.currentShape]
                state.currentShape = undefined
                return state
            }

            // Update location
            const shape: Shape = {
                uid: state.currentShape.uid,
                ...getShape({
                    ...state.currentShape,
                    location: {
                        ...location,
                        y: location.y + unit,
                    },
                }),
            }

            // Update drawn (remove current then push new location)
            const filteredDrawn = filterDrawn(shape.uid, state.drawn)
            const drawn = [...filteredDrawn, ...makeShapeDrawn(shape)]

            state.drawn = drawn
            state.currentShape = shape
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
