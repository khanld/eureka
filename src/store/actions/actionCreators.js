import * as actionTypes from './actionTypes'
import accessMetaMask from '../../web3'
import tourChainABI from '../../contracts/TourChainERC721.json'
import { dispatchedAction } from '../utils'
import nemoABI from '../../contracts/NemoERC20.json'
import { ERC20Address, ERC721Address } from '../../address'
// import { TourData } from '../../components/Tours/Data'
import { axios } from '../../axios'
import { initData } from '../../components/Tours/Data'

const startAccessing = () => dispatchedAction(actionTypes.START_ACCESSING)
const accessFailure = () => dispatchedAction(actionTypes.ACCESS_FAILURE)

const getTourData = async () => {
    const response = await axios.get('/tours/all');
    const TourData = response.data.data.tours

    TourData.forEach((tour, index) => {
        tour.index = index
    })
    TourData.forEach(tour => {
        tour.joined = tour.joined.length
    });
    return TourData
}

const getHotelData = async () => {
    const response = await axios.get('/hotels/all');
    const hotelData = response.data.data.hotels
    return hotelData;
}

const getUserData = async () => {
    let jwt = localStorage.getItem('jwt')
    console.log(jwt)
    let user = null
    if (jwt) {
        try {
            user = await axios.get('/users/me', {
                headers: {
                    'Authorization': `Bearer ${jwt}`
                }

            });
            user = user.data.data.user
        } catch (e) {
            console.log("user error", user)
            localStorage.clear()
            jwt = null
            user = null
        }
    }
    return user
}

export const initState = () => async dispatch => {
    dispatch(startAccessing())

    try {
        const web3 = await accessMetaMask()
        const account = web3.currentProvider.selectedAddress
        const TourchainContract = new web3.eth.Contract(tourChainABI.abi, ERC721Address)
        const NemoContract = new web3.eth.Contract(nemoABI.abi, ERC20Address)
        let jwt = localStorage.getItem('jwt')
        let user = await getUserData()
        
        const TourData = await getTourData();
        const hotelData = await getHotelData();

        // await initData.forEach(async (tour) => {
        //     const response = await axios.post('/tours/create', {
        //         header: tour.header,
        //         creator: "5f9fcef3052de600543a40fb",
        //         description: tour.description,
        //         duration: Number(tour.duration),
        //         category: tour.category,
        //         city: tour.city,
        //         price: Number(tour.price),
        //         image: tour.image,
        //         src: tour.src,
        //         curriculumn: tour.curriculumn,
        //         tourguides: []
        //     })
        //     console.log(response)
        // })


        let TRCValue = 0;
        let NemoValue = 0;
        let registered = false;
        if (account) {
            registered = await TourchainContract.methods._isRegistered(account).call();
            console.log(registered);
            TRCValue = await TourchainContract.methods.balanceOf(account).call()
            NemoValue = await NemoContract.methods.balanceOf(account).call()
        }


        //



        dispatch(dispatchedAction(actionTypes.INIT_STATE, {
            web3, TourchainContract, NemoContract, NemoValue, TRCValue, registered, TourData, jwt, user, hotelData
        }))
    } catch (error) {
        console.log(error)
        dispatch(accessFailure())
    }

}

export const chosenJobIndex = (index) => dispatchedAction(actionTypes.CHOSEN_JOB_INDEX, { index })

export const login = (jwt) => dispatchedAction(actionTypes.LOGIN, { jwt })

export const updateUser = (userData) => async dispatch => {
    const user = await getUserData();
    console.log("update user", user, userData)
    dispatch(dispatchedAction(actionTypes.UPDATE_USER, { user }))
}

export const updateTour = () => async dispatch => {
    const TourData = await getTourData();
    console.log("Action Creator", TourData)
    dispatch(dispatchedAction(actionTypes.UPDATE_TOUR, { TourData }))
}

export const updateNemo = (erc20Contract, account) => async dispatch => {
    const value = await erc20Contract.methods.balanceOf(account).call()
    dispatch(dispatchedAction(actionTypes.UPDATE_NEMO_TOKEN, { value }))
}

export const updateRegister = (TourchainContract, account) => async dispatch => {
    const registered = await TourchainContract.methods._isRegistered(account).call()
    dispatch(dispatchedAction(actionTypes.UPDATE_REGISTER, { registered }))
}

