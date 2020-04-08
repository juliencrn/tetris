import { configureStore } from '@reduxjs/toolkit'

import { loadState, saveState } from './persistStore'
import rootReducer from './rootReducer'

const persistedState = loadState()

const store = configureStore({
    reducer: rootReducer,
    preloadedState: persistedState,
})

// Persist Partial<Store>
store.subscribe(() => {
    const { game } = store.getState()
    saveState({ game })
})

export type RootState = ReturnType<typeof rootReducer>
export type RootDispatch = typeof store.dispatch

export default store
