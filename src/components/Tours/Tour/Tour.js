import React from 'react'
import { Link } from 'react-router-dom'
import * as actionCreators from '../../../store/actions/actionCreators'
import { connect } from 'react-redux'
import Modal from '../../UI/Modal/Modal'
import Spinner from '../../UI/Spinner/Spinner'
import MyButton from '../../UI/Button/Button'
import { store } from 'react-notifications-component';
import Rate from '../../UI/Rate/Rate'
import { axios } from '../../../axios'
import { Redirect } from 'react-router-dom'
import Rating from '@material-ui/lab/Rating';
import RateWrapper from '../../../hoc/RateWrapper/RateWrapper'
import ButtonUI from '../../../hoc/ButtonUI/ButtonUI'
import TextFieldUI from '../../../hoc/TextFieldUI/TextFieldUI'
import SendIcon from '@material-ui/icons/Send';
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import web3 from '../../../HdWallet'
import nemoABI from '../../../contracts/NemoERC20.json'
import { ERC20Address } from '../../../address'


let url_string = null
let url = null
let index = null
let data = []
let view = false;

class TourDetails extends React.Component {
    constructor(props) {
        super(props)
        this.textField = React.createRef();
        console.log(this.textField)
    }

    state = {
        modalShow: false,
        message: "",
        error: false,
        loading: false,
        booked: false,
        rate: 0,
        comment: '',
        registered: false,
        index: 0,
        checkbox: {}
    }

    async componentDidMount() {
        window.scrollTo({ top: 0 });
        this.setState({
            index: index
        })
    }

    addTour = async () => {
        console.log(this.props.isLogin)
        if (this.props.isLogin) {
            this.setState({
                modalShow: true,
                message: "Wanna add this tour?",
                error: false,
                loading: false
            })
        } else {
            store.addNotification({
                title: "Warning!",
                message: "You need to login!!!",
                type: "warning",
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
    }

    registerTourguide = async () => {
        this.setState({
            error: false,
            loading: true
        })
        try {

            const response = await axios.put('/tours/tourguide/join', {
                id: data._id,
                userID: this.props.user._id,
            })
            await this.props.onUpdateTourData();
            console.log(response);
            store.addNotification({
                title: "Wonderful!",
                message: "You have registered successfully!!",
                type: "success",
                insert: "top",
                container: "bottom-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });
            this.setState({
                modalShow: false,
                error: false,
                loading: false,
                registered: true
            })
        } catch (e) {
            console.log(e);
            store.addNotification({
                title: "Error!",
                message: "Something went wrong! Please try it again later.",
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
            console.log(e)
            this.setState({
                modalShow: false,
                error: true,
                loading: false
            })
        }
    }

    cancel = () => {
        this.setState({
            modalShow: false,
            error: false,
            loading: false
        })
    }

    continue = async () => {
        ///tour/details/guide?index=${index}
        console.log(data)
        this.setState({
            modalShow: false,
            error: false,
            loading: true
        })
        try {
            const response = await axios.put('/tours/join', {
                id: data._id,
                userID: this.props.user._id,
            })

            await this.props.onUpdateUser();
            store.addNotification({
                title: "Wonderful!",
                message: "You have added successfully. Enjoy your trip!!",
                type: "success",
                insert: "top",
                container: "bottom-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });
            this.setState({
                booked: true,
                modalShow: false,
                error: false,
                loading: false
            })

        } catch (error) {
            store.addNotification({
                title: "Error!",
                message: "Something went wrong! Please try it again later.",
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
            console.log(error)
            this.setState({
                modalShow: false,
                error: true,
                loading: false
            })
        }
    }

    rateTour = (event, value) => {
        this.setState({
            rate: value
        })
        this.textField.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    sendComment = async (event) => {
        this.setState({
            modalShow: false,
            error: false,
            loading: true
        })
        try {
            const response = await axios.put('/tours/review', {
                id: data._id,
                userID: this.props.user._id,
                comment: this.state.comment,
                rate: this.state.rate
            })
            console.log(response)
            await this.props.onUpdateTourData();
            this.setState({
                modalShow: false,
                error: false,
                loading: false,
                rate: 0,
                comment: ''
            })
        } catch (e) {
            console.log(e)
            this.setState({
                modalShow: false,
                error: true,
                loading: false,
                rate: 0,
                comment: ''
            })
            store.addNotification({
                title: "Error!",
                message: "Something went wrong! Please try it again later.",
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
    }

    writeComment = (event, value) => {
        this.setState({
            comment: event.target.value
        })
    }

    onTickHandler = async (index) => {
        console.log(index)
        let checkbox = { ...this.state.checkbox }
        if (!checkbox[`box${index}`]) checkbox[`box${index}`] = 1;
        else checkbox[`box${index}`]++;
        console.log(checkbox)
        this.setState({
            checkbox
        })
        if (checkbox[`box${index}`] === 4) {
            console.log(web3)
            try {
                store.addNotification({
                    title: "Wonderful!",
                    message: "Congratulation!! You have recieved 5 NEMO tokens from NemoChain. Check you balance now!!!",
                    type: "success",
                    insert: "top",
                    container: "bottom-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 30000,
                        onScreen: true
                    }
                });
                const account = "0x9113A1d7A8d600f69024550C276106bDCD52259A"
                const NemoContract = new web3.eth.Contract(nemoABI.abi, ERC20Address)
                await this.props.onUpdateNemo(NemoContract, window.web3.currentProvider.selectedAddress)
                const response = await NemoContract.methods.transfer(window.web3.currentProvider.selectedAddress, 5).send({
                    from: account,
                    gas: "3000000"
                });
                console.log(response)
            } catch (e) {
                console.log(e);
            }
        }
    }

    render() {
        url_string = window.location.href;
        url = new URL(url_string);
        index = url.searchParams.get("index");
        view = url.searchParams.get("view");
        data = this.props.TourData[Number(index)]

        const banner = "url(" + data.image + ")";
        return (
            <React.Fragment>
                {this.state.booked ? <Redirect to={`/tour/details/guide?index=${index}`} /> : null};
                {this.state.modalShow ?
                    <Modal show={this.state.modalShow} onBackdropClickHandler={this.refuseApplingJobs}>
                        <h3><i className="fas fa-exclamation-circle"></i></h3>
                        <p><strong>{this.state.message}</strong></p>
                        <MyButton btnType="posterBtn" btnWidth="100px" btnHeight="35px" onSubmitHandler={this.cancel} >REFUSE</MyButton>
                        <MyButton btnType="posterBtn" btnWidth="100px" btnHeight="35px" onSubmitHandler={this.continue}>CONTINUE</MyButton>
                    </Modal> : null}
                {this.state.loading ?
                    <div style={{ position: "fixed", width: "100%", top: "40%" }}>
                        <Spinner />
                    </div> : null}
                <div className="breadcumb-area">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/courses">Tour</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Details</li>
                        </ol>
                    </nav>
                </div>

                <div className="single-course-intro d-flex align-items-center justify-content-center" style={{ backgroundImage: banner }}>
                    <div className="single-course-intro-content text-center">
                        <div className="ratings">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star-o" aria-hidden="true"></i>
                        </div>
                        <h3>{data.header}</h3>
                        <div className="meta d-flex align-items-center justify-content-center">
                            <Link to>{data.creator.name}</Link>
                            <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                            <Link to>{data.city}</Link>
                        </div>
                        <div className="price">Details</div>
                    </div>
                </div>

                <div className="single-course-content section-padding-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-8">
                                <div className="course--content">

                                    <div className="clever-tabs-content">
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="tab--1" data-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="false">Description</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="tab--2" data-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="true">Curriculum</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="tab--3" data-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="true">Reviews</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="tab--4" data-toggle="tab" href="#tab4" role="tab" aria-controls="tab4" aria-selected="true">Members</a>
                                            </li>
                                        </ul>

                                        <div className="tab-content" id="myTabContent">

                                            <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab--1">
                                                <div className="clever-description">

                                                    <div className="about-course mb-30">
                                                        <h4>Map</h4>
                                                        <iframe src={data.src} width="640" height="480"></iframe>
                                                    </div>
                                                    <div className="about-course mb-30">
                                                        <h4>About this tour</h4>
                                                        <p>Sed elementum lacus a risus luctus suscipit. Aenean sollicitudin sapien neque, in fermentum lorem dignissim a. Nullam eu mattis quam. Donec porttitor nunc a diam molestie blandit. Maecenas quis ultrices ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam eget vehicula lorem, vitae porta nisi. Ut vel quam erat. Ut vitae erat tincidunt, tristique mi ac, pharetra dolor. In et suscipit ex. Pellentesque aliquet velit tortor, eget placerat mi scelerisque a. Aliquam eu dui efficitur purus posuere viverra. Proin ut elit mollis, euismod diam et, fermentum enim.</p>
                                                    </div>


                                                    <div className="all-instructors mb-30">
                                                        <h4>Top Tour Guides</h4>

                                                        <div className="row">
                                                            {data.tourguides.map((tourguide, index) => {
                                                                if (index == 4) return null;
                                                                return (
                                                                    <div className="col-lg-6" key={tourguide.image + '' + index + tourguide.image + index + tourguide.name + index}>
                                                                        <div className="single-instructor d-flex align-items-center mb-30">
                                                                            <div className="instructor-thumb">
                                                                                <img src={tourguide.image} alt="" />
                                                                            </div>
                                                                            <div className="instructor-info">
                                                                                <h5>{tourguide.name}</h5>
                                                                                <span>Tour Guides</span>
                                                                                <div>
                                                                                    <ButtonUI variant="contained" color="secondary" size="small" icon={<AddToHomeScreenIcon />}>Hide</ButtonUI>
                                                                                    <Link to={`/cv?index=${3}&id=${tourguide._id}`}>
                                                                                        <ButtonUI variant="contained" color="default" size="small" icon={<ViewAgendaIcon />}>View</ButtonUI>
                                                                                    </Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>


                                                    <div className="clever-faqs">
                                                        <h4>FAQs</h4>

                                                        <div className="accordions" id="accordion" role="tablist" aria-multiselectable="true">


                                                            <div className="panel single-accordion">
                                                                <h6><a role="MyButton" className="" aria-expanded="true" aria-controls="collapseOne" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Can I just enroll in a single course? I'm not interested in the entire Specialization?
                                                    <span className="accor-open"><i className="fa fa-plus" aria-hidden="true"></i></span>
                                                                    <span className="accor-close"><i className="fa fa-minus" aria-hidden="true"></i></span>
                                                                </a></h6>
                                                                <div id="collapseOne" className="accordion-content collapse show">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor.</p>
                                                                </div>
                                                            </div>


                                                            <div className="panel single-accordion">
                                                                <h6>
                                                                    <a role="MyButton" className="collapsed" aria-expanded="true" aria-controls="collapseTwo" data-parent="#accordion" data-toggle="collapse" href="#collapseTwo">What is the refund policy?
                                                        <span className="accor-open"><i className="fa fa-plus" aria-hidden="true"></i></span>
                                                                        <span className="accor-close"><i className="fa fa-minus" aria-hidden="true"></i></span>
                                                                    </a>
                                                                </h6>
                                                                <div id="collapseTwo" className="accordion-content collapse">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lectus eu felis semper finibus ac eget ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate id justo quis facilisis.</p>
                                                                </div>
                                                            </div>


                                                            <div className="panel single-accordion">
                                                                <h6>
                                                                    <a role="MyButton" aria-expanded="true" aria-controls="collapseThree" className="collapsed" data-parent="#accordion" data-toggle="collapse" href="#collapseThree">What background knowledge is necessary?
                                                        <span className="accor-open"><i className="fa fa-plus" aria-hidden="true"></i></span>
                                                                        <span className="accor-close"><i className="fa fa-minus" aria-hidden="true"></i></span>
                                                                    </a>
                                                                </h6>
                                                                <div id="collapseThree" className="accordion-content collapse">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lectus eu felis semper finibus ac eget ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate id justo quis facilisis.</p>
                                                                </div>
                                                            </div>


                                                            <div className="panel single-accordion">
                                                                <h6>
                                                                    <a role="MyButton" aria-expanded="true" aria-controls="collapseFour" className="collapsed" data-parent="#accordion" data-toggle="collapse" href="#collapseFour">Do i need to take the courses in a specific order?
                                                        <span className="accor-open"><i className="fa fa-plus" aria-hidden="true"></i></span>
                                                                        <span className="accor-close"><i className="fa fa-minus" aria-hidden="true"></i></span>
                                                                    </a>
                                                                </h6>
                                                                <div id="collapseFour" className="accordion-content collapse">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lectus eu felis semper finibus ac eget ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate id justo quis facilisis.</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>


                                            <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab--2">
                                                <div className="clever-curriculum">
                                                    <div className="about-curriculum mb-30">
                                                        <h4>Syllabus</h4>
                                                        <p>Sed elementum lacus a risus luctus suscipit. Aenean sollicitudin sapien neque, in fermentum lorem dignissim a. Nullam eu mattis quam. Donec porttitor nunc a diam molestie blandit. Maecenas quis ultrices ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam eget vehicula lorem, vitae porta nisi. Ut vel quam erat. Ut vitae erat tincidunt, tristique mi ac, pharetra dolor. In et suscipit ex. Pellentesque aliquet velit tortor, eget placerat mi scelerisque a. Aliquam eu dui efficitur purus posuere viverra. Proin ut elit mollis, euismod diam et, fermentum enim.</p>
                                                    </div>

                                                    {
                                                        data.curriculumn.map((place, index) => (
                                                            <div className="curriculum-level mb-30" key={place.placeName + '' + index + place.description + index}>
                                                                <h4 className="d-flex justify-content-between"><span>{place.placeName}</span> <span>{this.state.checkbox[`box${index}`] ? this.state.checkbox[`box${index}`] : 0}/4</span></h4>
                                                                <h5>Địa điểm {index + 1}</h5>
                                                                <p>{place.description}</p>

                                                                <ul className="curriculum-list">
                                                                    <li><i className="fa fa-file" aria-hidden="true"></i> Some tiles
<ul>
                                                                            <li>
                                                                                <span><i className="fa fa-video-camera" aria-hidden="true"></i> Video: <span>Greetings and Introductions</span></span>
                                                                                <span style={{ position: "relative" }}><i className="fa fa-clock-o" aria-hidden="true"></i>
                                                                                    <input style={{ position: "absolute", right: "100px", width: "50px", height: "20px" }} 
                                                                                    disabled={this.state.checkbox[`box${index}`] >= 1}
                                                                                        type="checkbox" onChange={() => this.onTickHandler(index)} />
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <span><i className="fa fa-file-text" aria-hidden="true"></i> Description: <span>Some things</span></span>
                                                                                <span style={{ position: "relative" }}>
                                                                                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                                                                                    <input style={{ position: "absolute", right: "100px", width: "50px", height: "20px" }}
                                                                                        disabled={this.state.checkbox[`box${index}`] >= 2}
                                                                                        type="checkbox" onChange={() => this.onTickHandler(index)} />
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <span><i className="fa fa-volume-down" aria-hidden="true"></i> Instruction: <span>Some things</span></span>
                                                                                <span style={{ position: "relative" }}>
                                                                                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                                                                                    <input style={{ position: "absolute", right: "100px", width: "50px", height: "20px" }} 
                                                                                    disabled={this.state.checkbox[`box${index}`] >= 3}
                                                                                    type="checkbox" onChange={() => this.onTickHandler(index)} 
                                                                                    /></span>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="d-flex justify-content-between">
                                                                        <span><i className="fa fa-graduation-cap" aria-hidden="true"></i> Some things</span>
                                                                        <span style={{ position: "relative" }}><i className="fa fa-clock-o" aria-hidden="true"></i>
                                                                        <input style={{ position: "absolute", right: "100px", width: "50px", height: "20px" }} 
                                                                        disabled={this.state.checkbox[`box${index}`] >= 4}
                                                                        type="checkbox" onChange={() => this.onTickHandler(index)} /></span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>


                                            <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab--3">
                                                <div className="clever-review">


                                                    <div className="about-review mb-30">
                                                        <h4>Reviews</h4>
                                                        <p>Sed elementum lacus a risus luctus suscipit. Aenean sollicitudin sapien neque, in fermentum lorem dignissim a. Nullam eu mattis quam. Donec porttitor nunc a diam molestie blandit. Maecenas quis ultrices</p>
                                                        <RateWrapper content="Rate this tour">

                                                            <Rating onChange={this.rateTour} name="half-rating" defaultValue={this.state.rate} size="large" />
                                                        </RateWrapper>
                                                    </div>


                                                    <div className="clever-ratings d-flex align-items-center mb-30">

                                                        <div className="total-ratings text-center d-flex align-items-center justify-content-center">
                                                            <div className="ratings-text">
                                                                <h2>{Math.round(data.averageRating)}</h2>
                                                                <Rate rating={data.averageRating}></Rate>
                                                                <span>Rated 5 out of 3 Ratings</span>
                                                            </div>
                                                        </div>

                                                        <div className="rating-viewer">

                                                            <div className="single-rating mb-15 d-flex align-items-center">
                                                                <span>5 STARS</span>
                                                                <div className="progress">
                                                                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}></div>
                                                                </div>
                                                                <span>80%</span>
                                                            </div>

                                                            <div className="single-rating mb-15 d-flex align-items-center">
                                                                <span>4 STARS</span>
                                                                <div className="progress">
                                                                    <div className="progress-bar" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}></div>
                                                                </div>
                                                                <span>20%</span>
                                                            </div>

                                                            <div className="single-rating mb-15 d-flex align-items-center">
                                                                <span>3 STARS</span>
                                                                <div className="progress">
                                                                    <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}></div>
                                                                </div>
                                                                <span>0%</span>
                                                            </div>

                                                            <div className="single-rating mb-15 d-flex align-items-center">
                                                                <span>2 STARS</span>
                                                                <div className="progress">
                                                                    <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}></div>
                                                                </div>
                                                                <span>0%</span>
                                                            </div>

                                                            <div className="single-rating mb-15 d-flex align-items-center">
                                                                <span>1 STARS</span>
                                                                <div className="progress">
                                                                    <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}></div>
                                                                </div>
                                                                <span>0%</span>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    {data.reviews.map((review, index) => (
                                                        <div className="single-review mb-30" key={review.user.image + '' + index + review.user.name + index + review.time + index}>
                                                            <div className="d-flex justify-content-between mb-30">

                                                                <div className="review-admin d-flex">
                                                                    <div className="thumb">
                                                                        <img src={review.user.image} alt="" />
                                                                    </div>
                                                                    <div className="text">
                                                                        <h6>{review.user.name}</h6>
                                                                        <span>{review.time}</span>
                                                                    </div>
                                                                </div>

                                                                <Rate rating={review.rate} style={"ratings"}></Rate>
                                                            </div>
                                                            <p>{review.comment}</p>
                                                        </div>

                                                    ))}
                                                    <TextFieldUI onChangeHandler={this.writeComment} label={"Comment"} ref={this.textField} value={this.state.comment}>
                                                    </TextFieldUI>
                                                    <ButtonUI variant="contained"
                                                        color="primary" icon={<SendIcon />} onClickHandler={this.sendComment}>Send</ButtonUI>
                                                </div>
                                            </div>


                                            <div className="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab--4">
                                                <div className="clever-members">


                                                    <div className="about-members mb-30">
                                                        <h4>Members</h4>
                                                        <p>Sed elementum lacus a risus luctus suscipit. Aenean sollicitudin sapien neque, in fermentum lorem dignissim a. Nullam eu mattis quam. Donec porttitor nunc a diam molestie blandit. Maecenas quis ultrices</p>
                                                    </div>


                                                    <div className="all-instructors mb-30">
                                                        <div className="row">
                                                            {data.tourguides.map((tourguide, index) => {
                                                                if (index == 6) return null;
                                                                return (
                                                                    <div {...this.props} className="col-lg-6" key={tourguide.image + '' + index + tourguide.image + index + tourguide.phone + index + tourguide.email}>
                                                                        <div className="single-instructor d-flex align-items-center mb-30">
                                                                            <div className="instructor-thumb">
                                                                                <img src={tourguide.image} alt="" />
                                                                            </div>
                                                                            <div className="instructor-info">
                                                                                <h5>{tourguide.name}</h5>
                                                                                <p style={{ marginBottom: "5px" }}>Tour Guide</p>
                                                                                <ButtonUI variant="contained" color="secondary" size="small" icon={<AddToHomeScreenIcon />}>Hide</ButtonUI>
                                                                                <Link to={`/cv?index=${index}&id=${tourguide._id}`}>
                                                                                    <ButtonUI variant="contained" color="default" size="small" icon={<ViewAgendaIcon />}>View</ButtonUI>
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="tab-pane fade" id="tab5" role="tabpanel" aria-labelledby="tab--5">
                                                <div className="clever-review">


                                                    <div className="about-review mb-30">
                                                        <h4>Reviews</h4>
                                                        <p>Sed elementum lacus a risus luctus suscipit. Aenean sollicitudin sapien neque, in fermentum lorem dignissim a. Nullam eu mattis quam. Donec porttitor nunc a diam molestie blandit. Maecenas quis ultrices</p>
                                                    </div>


                                                    <div className="clever-ratings d-flex align-items-center mb-30">

                                                        <div className="total-ratings text-center d-flex align-items-center justify-content-center">
                                                            <div className="ratings-text">
                                                                <h2>{Math.round(data.averageRating)}</h2>
                                                                <Rate rating={data.averageRating}></Rate>
                                                                <span>Rated 5 out of 3 Ratings</span>
                                                            </div>
                                                        </div>

                                                        <div className="rating-viewer">

                                                            <div className="single-rating mb-15 d-flex align-items-center">
                                                                <span>5 STARS</span>
                                                                <div className="progress">
                                                                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}></div>
                                                                </div>
                                                                <span>80%</span>
                                                            </div>

                                                            <div className="single-rating mb-15 d-flex align-items-center">
                                                                <span>4 STARS</span>
                                                                <div className="progress">
                                                                    <div className="progress-bar" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}></div>
                                                                </div>
                                                                <span>20%</span>
                                                            </div>

                                                            <div className="single-rating mb-15 d-flex align-items-center">
                                                                <span>3 STARS</span>
                                                                <div className="progress">
                                                                    <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}></div>
                                                                </div>
                                                                <span>0%</span>
                                                            </div>

                                                            <div className="single-rating mb-15 d-flex align-items-center">
                                                                <span>2 STARS</span>
                                                                <div className="progress">
                                                                    <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}></div>
                                                                </div>
                                                                <span>0%</span>
                                                            </div>

                                                            <div className="single-rating mb-15 d-flex align-items-center">
                                                                <span>1 STARS</span>
                                                                <div className="progress">
                                                                    <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}></div>
                                                                </div>
                                                                <span>0%</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {data.reviews.map((review, index) => (
                                                        <div className="single-review mb-30" key={review.userName + '' + index + review.time + index + review.rate + index}>
                                                            <div className="d-flex justify-content-between mb-30">

                                                                <div className="review-admin d-flex">
                                                                    <div className="thumb">
                                                                        <img src="img/bg-img/t1.png" alt="" />
                                                                    </div>
                                                                    <div className="text">
                                                                        <h6>{review.userName}</h6>
                                                                        <span>{review.time}</span>
                                                                    </div>
                                                                </div>

                                                                <Rate rating={review.rate} style="ratings"></Rate>
                                                            </div>
                                                            <p>{review.comment}</p>
                                                        </div>

                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-lg-4">
                                <div className="course-sidebar">

                                    <div className="btn clever-btn mb-30 w-100" onClick={this.addTour}>{view ? "VIEW" : "ADD"}</div>
                                    {this.state.regitered || this.props.registered ? null : <div className="btn clever-btn mb-30 w-100" onClick={this.registerTourguide}>BECOME TOURGUIDE</div>}

                                    <div className="sidebar-widget">
                                        <h4>Tour Features</h4>
                                        <ul className="features-list">
                                            <li>
                                                <h6><i className="fa fa-clock-o" aria-hidden="true"></i> Duration</h6>
                                                <h6>{data.duration} minutes</h6>
                                            </li>
                                            <li>
                                                <h6><i className="fa fa-bell" aria-hidden="true"></i> Tour Guides</h6>
                                                <h6>{data.tourguides.length}</h6>
                                            </li>
                                            <li>
                                                <h6><i className="fa fa-file" aria-hidden="true"></i> Price</h6>
                                                <h6>{data.price} vnđ</h6>
                                            </li>
                                            <li>
                                                <h6><i className="fa fa-thumbs-up" aria-hidden="true"></i> Already enrolled </h6>
                                                <h6>{data.joined}</h6>
                                            </li>
                                        </ul>
                                    </div>


                                    <div className="sidebar-widget">
                                        <h4>You may like</h4>


                                        <div className="single--courses d-flex align-items-center">
                                            <div className="thumb">
                                                <img src="https://media.truyenhinhdulich.vn/upload/news/154_hue.jpg" alt="" />
                                            </div>
                                            <div className="content">
                                                <h5>Huế</h5>
                                                <h6>Check</h6>
                                            </div>
                                        </div>
                                        <div className="single--courses d-flex align-items-center">
                                            <div className="thumb">
                                                <img src="https://media.vietravel.net/Images/NewsPicture/1-doi-che-cau-dat.jpg" alt="" />
                                            </div>
                                            <div className="content">
                                                <h5>Đà Lạt</h5>
                                                <h6>Check</h6>
                                            </div>
                                        </div>
                                        <div className="single--courses d-flex align-items-center">
                                            <div className="thumb">
                                                <img src="https://lh3.googleusercontent.com/proxy/DWt-peqk9_y4MsX9LAlfrkqBuXh3iwuSxPNjUwJy3XGUQWo250vHFx1BKAubMVO0-650D8dPQ1bYTbCsg4ke6fBijDxUpVCPdaoZKqfGiO8qnXfZk5bAiNL1kKyy-BUTbg" alt="" />
                                            </div>
                                            <div className="content">
                                                <h5>Sa Pa</h5>
                                                <h6>Check</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}


const mapStateToProps = (state) => {
    url_string = window.location.href;
    url = new URL(url_string);
    index = url.searchParams.get("index");
    data = state.TourData[Number(index)]
    console.log(data, state.user)
    let registered = false;
    if (state.user) {
        data.tourguides.forEach(tourguide => {
            if (tourguide._id === state.user._id) registered = true
        });
    }
    console.log(registered)
    return {
        web3: state.web3,
        tourChainContract: state.tourChainContract,
        TourData: state.TourData,
        isLogin: (state.user) ? true : false,
        user: state.user,
        registered
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateTourData: () => dispatch(actionCreators.updateTour()),
        onUpdateUser: () => dispatch(actionCreators.updateUser()),
        onUpdateNemo: (erc20Contract, account) => dispatch(actionCreators.updateNemo(erc20Contract, account))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TourDetails)