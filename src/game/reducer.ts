import { Quarter, ShapeOptions } from '../types'
import * as types from './types'
import { unit, canvasSize } from '../utils/config'

export interface UserState {
    shapes: ShapeOptions[]
}

const initialState: UserState = {
    shapes: [],
}

// tmp utils
function incrementQuarter(prev: Quarter) {
    const quarterToNum = Number(prev)
    const newQuarter: number = quarterToNum < 3 ? quarterToNum + 1 : 0
    return newQuarter.toString() as Quarter
}

// TODO : Ne pas laisser "any" pour les actions

export default function userReducer(
    state = initialState,
    action: types.GameActionTypes,
) {
    switch (action.type) {
        /*
         * Game control functions
         */

        case types.CREATE_SHAPE:
            return {
                ...state,
                shapes: [action.shape, ...state.shapes],
            }
        case types.RESET_GAME:
            return initialState

        /*
         * Game Play functions
         */
        case types.ROTATE:
            return {
                ...state,
                shapes: state.shapes.map((shape, i: number) => {
                    if (i === 0) {
                        return {
                            ...shape,
                            quarter: incrementQuarter(shape.quarter),
                        }
                    }
                    return shape
                }),
            }

        case types.MOVE_LEFT:
            return {
                ...state,
                shapes: state.shapes.map((shape, i: number) => {
                    if (i === 0) {
                        return {
                            ...shape,
                            location: {
                                ...shape.location,
                                x: shape.location.x - unit,
                            },
                        }
                    }
                    return shape
                }),
            }
        case types.MOVE_RIGHT:
            return {
                ...state,
                shapes: state.shapes.map((shape, i: number) => {
                    if (i === 0) {
                        return {
                            ...shape,
                            location: {
                                ...shape.location,
                                x: shape.location.x + unit,
                            },
                        }
                    }
                    return shape
                }),
            }
        case types.MOVE_BOTTOM:
            return {
                ...state,
                shapes: state.shapes.map((shape, i: number) => {
                    if (i === 0) {
                        return {
                            ...shape,
                            location: {
                                // TODO : Make y dynamic
                                ...shape.location,
                                y: canvasSize.height - 2 * unit,
                            },
                        }
                    }
                    return shape
                }),
            }

        default:
            return state
    }
}
