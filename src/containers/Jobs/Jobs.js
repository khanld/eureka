import React, { Component } from 'react'
import JobCategory from '../../components/JobCategoty/index'
import Modal from '../../components/UI/Modal/Modal'
import Button from '../../components/UI/Button/Button'
import Spinner from '../../components/UI/Spinner/Spinner'
import { connect } from 'react-redux'
//import singlePostData from '../../components/JobCategoty/singlePostData'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import * as actionCreators from '../../store/actions/actionCreators'
import tourHistory from '../../contracts/TourHistory.json'
import singlePostData from '../../components/JobCategoty/singlePostData'
import FPTLogo from '../../assets/fptLogo.jpg'
import TMALogo from '../../assets/TMALogo.jpg'
import VNGLogo from '../../assets/vngLogo.jpg'
import GRABLogo from '../../assets/grabLogo.png'
import nemoABI from '../../contracts/NemoERC20.json'
import { ERC20Address, ERC721Address } from '../../address'
import HDWalletWeb3 from '../../HdWallet'
import Rating from '@material-ui/lab/Rating';
import RateWrapper from '../../hoc/RateWrapper/RateWrapper'
import { Redirect } from "react-router-dom";

class Jobs extends Component {
    state = {
        modalShow: false,
        error: false,
        loading: false,
        singlePostData: [],
        selectedId: null,
        url: '',
        topTour: []
    }

    async componentDidMount() {
        //console.log("here");
        window.scrollTo({ top: 0 });
        this.setState({
            modalShow: false,
            error: false,
            loading: true
        })

        let topTour = this.props.allData.map((tour, index) => {
            return {
                id: index,
                thumb: {
                    img: tour.image,
                    tags: tour.category
                },
                details: {
                    titles: [
                        tour.header,
                        <RateWrapper><Rating name="half-rating" defaultValue={Math.round(tour.averageRating)} readOnly /></RateWrapper>
                    ],
                    company: tour.creator.name,
                    briefDesc: tour.description,
                    address: tour.city,
                    salary: tour.price
                },
                tick: false
            }
        })
        let data = []
        if (this.props.TourData !== null && this.props.TourData !== undefined) {

            data = this.props.TourData.map((tour, index) => {
                return {
                    id: tour.index,
                    thumb: {
                        img: tour.image,
                        tags: tour.category
                    },
                    details: {
                        titles: [
                            tour.header,
                            <RateWrapper><Rating name="half-rating" defaultValue={Math.round(tour.averageRating)} readOnly /></RateWrapper>
                        ],
                        company: tour.creator.name,
                        briefDesc: tour.description,
                        address: tour.city,
                        salary: tour.price
                    },
                    tick: false
                }
            })
        }
        this.setState({
            topTour,
            singlePostData: data,
            modalShow: false,
            error: false,
            loading: false
        })
    }
    viewTour = (index) => {
        this.setState({
            url: `/tour/details?index=${index}&view=${1}`
        })
    }
    render() {
        if (!this.props.isLogin) {
            store.addNotification({
                title: "Error!",
                message: "You have not logged in yet!",
                type: "danger",
                insert: "top",
                container: "bottom-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });
        }
        return (
            <React.Fragment>
                {!this.props.isLogin ? <Redirect to='/login' /> : null}
                {this.props.isLogin && this.state.url !== '' ? <Redirect to={this.state.url} /> : null}
                <JobCategory onClickHandler={this.viewTour} singlePostData={this.state.singlePostData} topTour={this.state.topTour} />
                {this.state.loading ?
                    <div style={{ position: "fixed", width: "100%", top: "40%" }}>
                        <Spinner />
                    </div> : null}
                <div className="app-container">
                    <ReactNotification />
                </div>
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    let arr = null
    if(state.user && state.TourData) {
        arr = [...state.user.yourTour]
        state.TourData.forEach(tour => {
            for(let i = 0; i < arr.length; i++) {
                let userTour = arr[i];
                if(userTour._id === tour._id) {
                    arr[i].index = tour.index
                }
            }
        });
    }
    console.log(arr);
    return {
        tourChainContract: state.tourChainContract,
        web3: state.web3,
        isLogin: (state.user === null || state.user === undefined) ? false : true,
        TourData: arr,
        allData: (state.TourData !== null && state.TourData !== undefined) ? state.TourData : []
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNemo: (erc20Contract, account) => dispatch(actionCreators.updateNemo(erc20Contract, account)),
        chosenJobIndex: (index) => dispatch(actionCreators.chosenJobIndex(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jobs)