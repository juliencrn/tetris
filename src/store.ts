import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { loadState, saveState } from './utils/persistStore'
import userReducer from './reducers/userReducer'

const rootReducer = combineReducers({
    user: userReducer,
})

const persistedState = loadState()

const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(thunk)),
)

// Persist Partial<Store>
store.subscribe(() => {
    const { user } = store.getState()
    saveState({ user })
})

export type RootState = ReturnType<typeof rootReducer>

export default store
