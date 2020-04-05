import { configureStore } from '@reduxjs/toolkit'

// import { loadState } from './persistStore'
import rootReducer from './rootReducer'

const store = configureStore({
    reducer: rootReducer,
})

// Persist Partial<Store>
// const persistedState = loadState()
// store.subscribe(() => {
//     const { user } = store.getState()
//     saveState({ user })
// })

export type RootState = ReturnType<typeof rootReducer>
export type RootDispatch = typeof store.dispatch

export default store
