import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { loadState } from './persistStore'
import rootReducer from './rootReducer'

const persistedState = loadState()

const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(thunk)),
)

// Persist Partial<Store>
// store.subscribe(() => {
//     const { user } = store.getState()
//     saveState({ user })
// })

export type RootState = ReturnType<typeof rootReducer>

export default store
