import * as actionTypes from '../actions/actionTypes'
import { updatedState } from '../utils'

const initialState = {
    web3: null,
    tourChainContract: null,
    TRCValue: 0,
    loading: false,
    error: false,
    NemoContract: null,
    NemoValue: 0,
    registered: false,
    index: null,
    TourData: null,
    jwt: null,
    user: null,
    hotelData: null
}

const initState = (state, action) => {
    return updatedState(state, {
        web3: action.web3,
        tourChainContract: action.TourchainContract,
        TRCValue: action.TRCValue,
        loading: false,
        error: false,
        NemoContract: action.NemoContract,
        NemoValue: action.NemoValue,
        registered: action.registered,
        TourData: action.TourData,
        jwt: action.jwt,
        user: action.user,
        hotelData: action.hotelData
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_STATE: return initState(state, action)
        case actionTypes.START_ACCESSING: return updatedState(state, { loading: true, error: false })
        case actionTypes.ACCESS_FAILURE: return updatedState(state, { loading: false, error: true })
        case actionTypes.UPDATE_REGISTER: return updatedState(state, { registered: action.registered })
        case actionTypes.UPDATE_NEMO_TOKEN: return updatedState(state, { NemoValue: action.value })
        case actionTypes.CHOSEN_JOB_INDEX: return updatedState(state, { index: action.index })
        case actionTypes.LOGIN: return updatedState(state, { jwt: action.jwt })
        case actionTypes.UPDATE_USER: return updatedState(state, {user: action.user})
        case actionTypes.UPDATE_TOUR: return updatedState(state, {TourData: action.TourData})
        default: return state
    }
}

export default reducer