import {
    CREATE_SHAPE,
    RESET_GAME,
    GameActionTypes,
    ROTATE,
    MOVE_LEFT,
    MOVE_BOTTOM,
    MOVE_RIGHT,
} from './constants'
import { unit } from '../../../common/config'

/*
 * Game control functions
 */

export const createShape = (): GameActionTypes => ({
    type: CREATE_SHAPE,
    shape: {
        type: 'T',
        quarter: '0',
        location: { x: 1 * unit, y: 11 * unit },
    },
})

export const resetGame = (): GameActionTypes => ({
    type: RESET_GAME,
})

/*
 * Game Play functions
 */

export const rotate = (): GameActionTypes => ({
    type: ROTATE,
})

export const moveLeft = (): GameActionTypes => ({
    type: MOVE_LEFT,
})

export const moveRight = (): GameActionTypes => ({
    type: MOVE_RIGHT,
})

export const moveBottom = (): GameActionTypes => ({
    type: MOVE_BOTTOM,
})
