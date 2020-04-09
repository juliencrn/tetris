import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Shape, Drawn, ShapeOptions } from '../../common/types'
import { unit, canvasSize } from '../../common/config'

import { getShape } from './shapes'
import * as data from './data'
import {
    incrementQuarter,
    makeShapeDrawn,
    shapeTouchedDrawn,
    decrementLocation,
    incrementLocation,
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

            const isCollides = shapeTouchedDrawn(shape, state.drawn)

            if (isCollides) {
                return state
            }

            state.currentShape = shape
        },

        moveLeft(state) {
            if (!state?.currentShape) {
                return state
            }

            const { location } = state.currentShape

            // Left wall touched
            const isLeft = location.x <= 0

            // Update location
            const shape: Shape = {
                uid: state.currentShape.uid,
                ...getShape({
                    ...state.currentShape,
                    location: decrementLocation(location, 'x'),
                }),
            }

            // check if the shape collides other shape
            const isCollides = shapeTouchedDrawn(shape, state.drawn)

            if (isLeft || isCollides) {
                return state
            }

            state.currentShape = shape
        },

        moveRight(state) {
            if (!state?.currentShape) {
                return state
            }

            const { location } = state.currentShape

            // Right wall touched
            const isRight =
                location.x >= canvasSize.width - state.currentShape.width

            // Update location
            const shape: Shape = {
                uid: state.currentShape.uid,
                ...getShape({
                    ...state.currentShape,
                    location: incrementLocation(location, 'x'),
                }),
            }

            // check if the shape collides other shape
            const isCollides = shapeTouchedDrawn(shape, state.drawn)

            if (isRight || isCollides) {
                return state
            }

            state.currentShape = shape
        },

        moveBottom(state) {
            if (!state?.currentShape) {
                return state
            }

            const { location } = state.currentShape

            // Bottom touched
            const isBottom =
                location.y >= canvasSize.height - state.currentShape.height

            // Update location
            const shape: Shape = {
                uid: state.currentShape.uid,
                ...getShape({
                    ...state.currentShape,
                    location: incrementLocation(location, 'y'),
                }),
            }

            // check if the shape collides other shape
            const isCollides = shapeTouchedDrawn(shape, state.drawn)

            // Archive then remove the currentShape
            if (isBottom || isCollides) {
                state.shapes = [...state.shapes, state.currentShape]
                state.drawn = [
                    ...state.drawn,
                    ...makeShapeDrawn(state.currentShape),
                ]
                state.currentShape = undefined
                return state
            }

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
