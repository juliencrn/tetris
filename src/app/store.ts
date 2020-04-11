import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import game from '../features/game/module'

const rootReducer = combineReducers({
    game,
})

const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type RootDispatch = typeof store.dispatch

export default store
