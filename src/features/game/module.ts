import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ShapeOptions, Quarter } from '../../common/types'
import { unit, canvasSize } from '../../common/config'
import { getRandomShape } from './shapes'

export interface UserState {
    currentShape: ShapeOptions
    shapes: ShapeOptions[]
}

const initialState: UserState = {
    currentShape: getRandomShape(),
    shapes: [],
}

const game = createSlice({
    name: 'game',
    initialState,
    reducers: {
        createShape(state, action: PayloadAction<ShapeOptions>) {
            // Archive current shape in "static shapes array"
            state.shapes = [state.currentShape, ...state.shapes]

            // Set the new shape from payload
            state.currentShape = action.payload
        },
        resetGame(state) {
            state = initialState
        },
        rotate(state) {
            const quarterToNum = Number(state.currentShape.quarter)
            const newQuarter: number = quarterToNum < 3 ? quarterToNum + 1 : 0
            state.currentShape.quarter = newQuarter.toString() as Quarter
        },
        moveLeft(state) {
            const { x } = state.currentShape.location
            state.currentShape.location.x = x - unit
        },
        moveRight(state) {
            const { x } = state.currentShape.location
            state.currentShape.location.x = x + unit
        },
        moveBottom(state) {
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
