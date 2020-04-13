import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Shape, ShapeOptions } from '../../common/types'
import { unit, canvasSize } from '../../common/config'

import { getShape } from './shapes'
import {
    incrementQuarter,
    shapeTouchedDrawn,
    decrementLocation,
    incrementLocation,
} from './utils'

interface UserState {
    currentShape?: Shape
    isGaming: boolean
    isTimeRunning: boolean
    shapes: Shape[]
    tick: number
    lines: number
    score: number
    level: number
    tickSpeed: number
    gameOver: boolean
}

const initialState: UserState = {
    currentShape: undefined,
    shapes: [],
    isGaming: false, // The game, will reset all
    isTimeRunning: false, // Play/pause
    tick: 0,
    lines: 0,
    score: 0,
    level: 1,
    tickSpeed: 600,
    gameOver: false,
}

const game = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setTime(state, { payload }: PayloadAction<number>) {
            state.tick = payload
        },

        play(state) {
            if (!state.isGaming) {
                state.isGaming = true
            }
            state.isTimeRunning = true
        },

        pause(state) {
            state.isTimeRunning = false
        },

        newGame(state) {
            state.isGaming = true
            state.isTimeRunning = true
        },

        incrementScore(state, { payload }: PayloadAction<number>) {
            state.score += payload * state.level
        },

        removeLine(state, { payload }: PayloadAction<number>) {
            // Remove all the shape for removed lines
            const shapes = state.shapes.map((shape) => {
                const rects = shape.rects
                    .filter(({ y }) => y !== payload)
                    .map(({ y, x }) => {
                        if (y < payload) {
                            return { x, y: y + unit }
                        }
                        return { x, y }
                    })
                return { ...shape, rects }
            })

            // Update lines counter
            const lines = state.lines + 1

            // Check if need level-up
            const level = Math.floor(lines / 10) + 1
            if (level !== state.level) {
                state.tickSpeed *= 0.9
            }

            // Update state
            state.lines = lines
            state.level = level
            state.shapes = shapes
        },

        resetGame() {
            return initialState
        },

        createShape(state, { payload }: PayloadAction<ShapeOptions>) {
            if (!state.isGaming) {
                state.isGaming = true
            }

            // Archive current shape in "static shapes array"
            if (typeof state.currentShape !== 'undefined') {
                state.shapes = [state.currentShape, ...state.shapes]
            }

            const shape = {
                ...getShape(payload),
                uid: state.shapes.length.toString(),
            }

            // check if the shape collides other shape
            const isCollides = shapeTouchedDrawn(shape, state.shapes)

            // If collides on createShape
            // Set to game-over
            if (isCollides) {
                state.isTimeRunning = false
                state.gameOver = true
            }

            console.log({ isCollides })

            // Set the new shape from payload
            state.currentShape = shape
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
                prevRects: state.currentShape.rects,
            }

            const isCollides = shapeTouchedDrawn(shape, state.shapes)

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
                prevRects: state.currentShape.rects,
            }

            // check if the shape collides other shape
            const isCollides = shapeTouchedDrawn(shape, state.shapes)

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
                prevRects: state.currentShape.rects,
            }

            // check if the shape collides other shape
            const isCollides = shapeTouchedDrawn(shape, state.shapes)

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
                prevRects: state.currentShape.rects,
            }

            // check if the shape collides other shape
            const isCollides = shapeTouchedDrawn(shape, state.shapes)

            // Archive then remove the currentShape
            if (isBottom || isCollides) {
                state.shapes = [...state.shapes, state.currentShape]
                state.currentShape = undefined
                return state
            }

            state.currentShape = shape
        },
    },
})

export const {
    setTime,
    play,
    pause,
    newGame,
    incrementScore,
    removeLine,
    resetGame,
    createShape,
    rotate,
    moveLeft,
    moveRight,
    moveBottom,
} = game.actions

export default game.reducer
