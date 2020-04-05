import { ShapeOptions } from '../../../common/types'

// Game
export const CREATE_SHAPE = 'CREATE_SHAPE'
export const RESET_GAME = 'RESET_GAME'

interface CreateShapeAction {
    type: typeof CREATE_SHAPE
    shape: ShapeOptions
}

interface ResetGameAction {
    type: typeof RESET_GAME
}

// Game play
export const ROTATE = 'ROTATE'
export const MOVE_LEFT = 'MOVE_LEFT'
export const MOVE_RIGHT = 'MOVE_RIGHT'
export const MOVE_BOTTOM = 'MOVE_BOTTOM'

interface CreateShapeAction {
    type: typeof CREATE_SHAPE
    shape: ShapeOptions
}

interface RotateAction {
    type: typeof ROTATE
}

interface MoveLeftAction {
    type: typeof MOVE_LEFT
}

interface MoveRightAction {
    type: typeof MOVE_RIGHT
}

interface MoveBottomAction {
    type: typeof MOVE_BOTTOM
}

export type GameActionTypes =
    | ResetGameAction
    | RotateAction
    | MoveLeftAction
    | MoveRightAction
    | CreateShapeAction
    | MoveBottomAction
