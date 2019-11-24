import * as actionTypes from './actionTypes'
import accessMetaMask from '../../web3'
import abi from '../../contracts/Factory.json'
import { dispatchedAction } from '../utils'

const startAccessing = () => dispatchedAction(actionTypes.START_ACCESSING)
const accessFailure = () => dispatchedAction(actionTypes.ACCESS_FAILURE)

export const initState = () => async dispatch => {
    dispatch(startAccessing())

    try {
        const web3 = await accessMetaMask()
        const account = web3.currentProvider.selectedAddress
        const factory = new web3.eth.Contract(abi, "0x5A5500d09789EF38D47fCF8e7270a9196BC257fF")
        let balance = 0;
        let issuer = {}
        let company = {}

        if (account) {
            balance = await factory.methods.balanceOf(account).call()

            issuer.registered = await factory.methods.issuers(account).call()

            company.registered = await factory.methods.companies(account).call()

        }


        dispatch(dispatchedAction(actionTypes.INIT_STATE, { web3, factory, balance, issuer, company }))
    } catch (error) {
        console.log(error)
        dispatch(accessFailure())
    }

}

export const chosenJobIndex = (index) => dispatchedAction(actionTypes.CHOSEN_JOB_INDEX, { index })