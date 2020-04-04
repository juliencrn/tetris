export interface UserState {
    name: string
    isLogged: boolean
    bestScore: number
}

const defaultName = 'Invité'

const initialState: UserState = {
    name: defaultName,
    isLogged: false,
    bestScore: 0,
}

// TODO : Ne pas laisser "any" pour les actions

export default function userReducer(state = initialState, action: any) {
    switch (action.type) {
        default:
            return state
    }
}
