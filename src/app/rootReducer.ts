import { combineReducers } from 'redux'

import game from '../features/game/module'

const rootReducer = combineReducers({
    game,
})

export default rootReducer
