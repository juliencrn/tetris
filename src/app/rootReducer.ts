import { combineReducers } from 'redux'

import game from '../features/game'

const rootReducer = combineReducers({
    game,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
