import * as actionTypes from '../actions/actionTypes'
import { updatedState } from '../utils'

const initialState = {
    web3: null,
    factory: null,
    balance: null,
    issuer: null,
    company: null,
    loading: false,
    error: false,
    chosenIndex: 1
}

const initState = (state, action) => {
    return updatedState(state, {
        web3: action.web3,
        factory: action.factory,
        balance: action.balance,
        issuer: action.issuer,
        company: action.company,
        loading: false,
        error: false
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_STATE: return initState(state, action)
        case actionTypes.START_ACCESSING: return updatedState(state, { loading: true, error: false })
        case actionTypes.ACCESS_FAILURE: return updatedState(state, { loading: false, error: true })
        case actionTypes.CHOSEN_JOB_INDEX: return updatedState(state, {chosenIndex: action.index})
        default: return state
    }
}

export default reducer