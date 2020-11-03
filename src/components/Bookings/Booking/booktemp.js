import React from 'react'
import { Link } from 'react-router-dom'
import * as actionCreators from '../../../store/actions/actionCreators'
import { connect } from 'react-redux'
import Modal from '../../../components/UI/Modal/Modal'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Button from '../../../components/UI/Button/Button'
import { store } from 'react-notifications-component';
import ReactNotification from 'react-notifications-component'


class SingleCourse extends React.Component {
    state = {
        modalShow: false,
        error: false,
        loading: false,
        booked: false
    }

    bookTour = async () => {
            this.setState({
                modalShow: true,
                error: false,
                loading: true
            })
    }

    cancel = () => {
        this.setState({
            modalShow: false,
            error: false,
            loading: false
        })
    }

    continue = async () => {
        try {
            this.setState({
                modalShow: false,
                error: false,
                loading: true
            })
            let tmo = await this.props.tourChainContract.methods._bookTour("0x9113A1d7A8d600f69024550C276106bDCD52259A", "Nha Trang", 1).send({
                from: window.web3.currentProvider.selectedAddress,
                value: this.props.web3.utils.toWei("1", 'ether')
            })
            
            console.log(tmo);
            store.addNotification({
                title: "Wonderful!",
                message: "You have applied successfully. Good luck!!",
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
               booked: true
            })

        } catch (error) {
            console.log(error)
            this.setState({
                modalShow: false,
                error: true,
                loading: false
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.modalShow ?
                    <Modal show={this.state.modalShow} onBackdropClickHandler={this.refuseApplingJobs}>
                        <h3><i className="fas fa-exclamation-circle"></i></h3>
                        <p><strong>SURE TO PURCHASE THIS TOUR</strong></p>
                        <Button btnType="posterBtn" btnWidth="100px" btnHeight="35px" onSubmitHandler={this.cancel} >REFUSE</Button>
                        <Button btnType="posterBtn" btnWidth="100px" btnHeight="35px" onSubmitHandler={this.continue}>CONTINUE</Button>
                    </Modal> : null}
                    {this.state.loading ?
                    <div style={{ position: "fixed", width: "100%", top: "40%" }}>
                        <Spinner />
                    </div> : null}
                    <div className="app-container">
                    <ReactNotification />
                </div>
                <div className="breadcumb-area">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/courses">Courses</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Single Course</li>
                        </ol>
                    </nav>
                </div>

                <div className="single-course-intro d-flex align-items-center justify-content-center" style={{ backgroundImage: "url(img/bg-img/bg3.jpg)" }}>
                    <div className="single-course-intro-content text-center">
                        <div className="ratings">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star-o" aria-hidden="true"></i>
                        </div>
                        <h3>CHOOSE YOUR DESTINATION</h3>
                        <div className="meta d-flex align-items-center justify-content-center">
                            <Link to>Sarah Parker</Link>
                            <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                            <Link to>Tour &amp; Chain</Link>
                        </div>
                        <div className="price">1 ethers</div>
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
                                            <li className="nav-item">
                                                <a className="nav-link" id="tab--5" data-toggle="tab" href="#tab5" role="tab" aria-controls="tab5" aria-selected="true">Forum</a>
                                            </li>
                                        </ul>

                                        <div className="tab-content" id="myTabContent">

                                            <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab--1">
                                                <div className="clever-description">


                                                    <div className="about-course mb-30">
                                                        <h4>About this tour</h4>
                                                        <p>Sed elementum lacus a risus luctus suscipit. Aenean sollicitudin sapien neque, in fermentum lorem dignissim a. Nullam eu mattis quam. Donec porttitor nunc a diam molestie blandit. Maecenas quis ultrices ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam eget vehicula lorem, vitae porta nisi. Ut vel quam erat. Ut vitae erat tincidunt, tristique mi ac, pharetra dolor. In et suscipit ex. Pellentesque aliquet velit tortor, eget placerat mi scelerisque a. Aliquam eu dui efficitur purus posuere viverra. Proin ut elit mollis, euismod diam et, fermentum enim.</p>
                                                    </div>


                                                    <div className="all-instructors mb-30">
                                                        <h4>All Tour Guides</h4>

                                                        <div className="row">

                                                            <div className="col-lg-6">
                                                                <div className="single-instructor d-flex align-items-center mb-30">
                                                                    <div className="instructor-thumb">
                                                                        <img src="img/bg-img/t1.png" alt="" />
                                                                    </div>
                                                                    <div className="instructor-info">
                                                                        <h5>Sarah Parker</h5>
                                                                        <span>Tour Guides</span>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div className="col-lg-6">
                                                                <div className="single-instructor d-flex align-items-center mb-30">
                                                                    <div className="instructor-thumb">
                                                                        <img src="img/bg-img/t2.png" alt="" />
                                                                    </div>
                                                                    <div className="instructor-info">
                                                                        <h5>Sarah Parker</h5>
                                                                        <span>Tour Guides</span>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div className="col-lg-6">
                                                                <div className="single-instructor d-flex align-items-center mb-30">
                                                                    <div className="instructor-thumb">
                                                                        <img src="img/bg-img/t3.png" alt="" />
                                                                    </div>
                                                                    <div className="instructor-info">
                                                                        <h5>Sarah Parker</h5>
                                                                        <span>Tour Guides</span>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div className="col-lg-6">
                                                                <div className="single-instructor d-flex align-items-center mb-30">
                                                                    <div className="instructor-thumb">
                                                                        <img src="img/bg-img/t4.png" alt="" />
                                                                    </div>
                                                                    <div className="instructor-info">
                                                                        <h5>Sarah Parker</h5>
                                                                        <span>Tour Guides</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="clever-faqs">
                                                        <h4>FAQs</h4>

                                                        <div className="accordions" id="accordion" role="tablist" aria-multiselectable="true">


                                                            <div className="panel single-accordion">
                                                                <h6><a role="button" className="" aria-expanded="true" aria-controls="collapseOne" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Can I just enroll in a single course? I'm not interested in the entire Specialization?
                                                    <span className="accor-open"><i className="fa fa-plus" aria-hidden="true"></i></span>
                                                                    <span className="accor-close"><i className="fa fa-minus" aria-hidden="true"></i></span>
                                                                </a></h6>
                                                                <div id="collapseOne" className="accordion-content collapse show">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor.</p>
                                                                </div>
                                                            </div>


                                                            <div className="panel single-accordion">
                                                                <h6>
                                                                    <a role="button" className="collapsed" aria-expanded="true" aria-controls="collapseTwo" data-parent="#accordion" data-toggle="collapse" href="#collapseTwo">What is the refund policy?
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
                                                                    <a role="button" aria-expanded="true" aria-controls="collapseThree" className="collapsed" data-parent="#accordion" data-toggle="collapse" href="#collapseThree">What background knowledge is necessary?
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
                                                                    <a role="button" aria-expanded="true" aria-controls="collapseFour" className="collapsed" data-parent="#accordion" data-toggle="collapse" href="#collapseFour">Do i need to take the courses in a specific order?
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


                                                    <div className="curriculum-level mb-30">
                                                        <h4 className="d-flex justify-content-between"><span>Ngày 1</span> <span>/4</span></h4>
                                                        <h5>Địa điểm 1</h5>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla.</p>

                                                        <ul className="curriculum-list">
                                                        <li><i className="fa fa-file" aria-hidden="true"></i> Some tiles
                                                    <ul>
                                                                    <li>
                                                                        <span><i className="fa fa-video-camera" aria-hidden="true"></i> Video: <span>Greetings and Introductions</span></span>
                                                                        <span style={{ position: "relative" }}><i className="fa fa-clock-o" aria-hidden="true"></i><input style={{ position: "absolute", right: "100px", width: "50px", height: "20px" }} type="checkbox" onChange={() => this.onTickHandler(3)} /></span>
                                                                    </li>
                                                                    <li>
                                                                        <span><i className="fa fa-file-text" aria-hidden="true"></i> Description: <span>Some things</span></span>
                                                                        <span style={{ position: "relative" }}><i className="fa fa-clock-o" aria-hidden="true"></i><input style={{ position: "absolute", right: "100px", width: "50px", height: "20px" }} type="checkbox" onChange={() => this.onTickHandler(3)} /></span>
                                                                    </li>
                                                                    <li>
                                                                        <span><i className="fa fa-volume-down" aria-hidden="true"></i> Instruction: <span>Some things</span></span>
                                                                        <span style={{ position: "relative" }}><i className="fa fa-clock-o" aria-hidden="true"></i><input style={{ position: "absolute", right: "100px", width: "50px", height: "20px" }} type="checkbox" onChange={() => this.onTickHandler(3)} /></span>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="d-flex justify-content-between">
                                                                <span><i className="fa fa-graduation-cap" aria-hidden="true"></i> Some things</span>
                                                                <span style={{ position: "relative" }}><i className="fa fa-clock-o" aria-hidden="true"></i><input style={{ position: "absolute", right: "100px", width: "50px", height: "20px" }} type="checkbox" onChange={() => this.onTickHandler(3)} /></span>
                                                            </li>
                                                        </ul>
                                                    </div>


                                                    <div className="curriculum-level mb-30">
                                                        <h4 className="d-flex justify-content-between"><span>Ngày 2</span> <span>/4</span></h4>
                                                        <h5>Địa điểm 2</h5>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla.</p>

                                                        <ul className="curriculum-list">
                                                            <li><i className="fa fa-file" aria-hidden="true"></i> Some tiles
                                                    <ul>
                                                                    <li>
                                                                        <span><i className="fa fa-video-camera" aria-hidden="true"></i> Video: <span>Greetings and Introductions</span></span>
                                                                        <span style={{ position: "relative" }}><i className="fa fa-clock-o" aria-hidden="true"></i><input style={{ position: "absolute", right: "100px", width: "50px", height: "20px" }} type="checkbox" onChange={() => this.onTickHandler(3)} /></span>
                                                                    </li>
                                                                    <li>
                                                                        <span><i className="fa fa-file-text" aria-hidden="true"></i> Description: <span>Some things</span></span>
                                                                        <span style={{ position: "relative" }}><i className="fa fa-clock-o" aria-hidden="true"></i><input style={{ position: "absolute", right: "100px", width: "50px", height: "20px" }} type="checkbox" onChange={() => this.onTickHandler(3)} /></span>
                                                                    </li>
                                                                    <li>
                                                                        <span><i className="fa fa-volume-down" aria-hidden="true"></i> Instruction: <span>Some things</span></span>
                                                                        <span style={{ position: "relative" }}><i className="fa fa-clock-o" aria-hidden="true"></i><input style={{ position: "absolute", right: "100px", width: "50px", height: "20px" }} type="checkbox" onChange={() => this.onTickHandler(3)} /></span>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="d-flex justify-content-between">
                                                                <span><i className="fa fa-graduation-cap" aria-hidden="true"></i> Some things</span>
                                                                <span style={{ position: "relative" }}><i className="fa fa-clock-o" aria-hidden="true"></i><input style={{ position: "absolute", right: "100px", width: "50px", height: "20px" }} type="checkbox" onChange={() => this.onTickHandler(3)} /></span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab--3">
                                                <div className="clever-review">


                                                    <div className="about-review mb-30">
                                                        <h4>Reviews</h4>
                                                        <p>Sed elementum lacus a risus luctus suscipit. Aenean sollicitudin sapien neque, in fermentum lorem dignissim a. Nullam eu mattis quam. Donec porttitor nunc a diam molestie blandit. Maecenas quis ultrices</p>
                                                    </div>


                                                    <div className="clever-ratings d-flex align-items-center mb-30">

                                                        <div className="total-ratings text-center d-flex align-items-center justify-content-center">
                                                            <div className="ratings-text">
                                                                <h2>4.5</h2>
                                                                <div className="ratings--">
                                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                                    <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                                                </div>
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


                                                    <div className="single-review mb-30">
                                                        <div className="d-flex justify-content-between mb-30">

                                                            <div className="review-admin d-flex">
                                                                <div className="thumb">
                                                                    <img src="img/bg-img/t1.png" alt="" />
                                                                </div>
                                                                <div className="text">
                                                                    <h6>Sarah Parker</h6>
                                                                    <span>Sep 29, 2017 at 9:48 am</span>
                                                                </div>
                                                            </div>

                                                            <div className="ratings">
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis.</p>
                                                    </div>


                                                    <div className="single-review mb-30">
                                                        <div className="d-flex justify-content-between mb-30">

                                                            <div className="review-admin d-flex">
                                                                <div className="thumb">
                                                                    <img src="img/bg-img/t1.png" alt="" />
                                                                </div>
                                                                <div className="text">
                                                                    <h6>Sarah Parker</h6>
                                                                    <span>Sep 29, 2017 at 9:48 am</span>
                                                                </div>
                                                            </div>

                                                            <div className="ratings">
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis.</p>
                                                    </div>
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

                                                            <div className="col-lg-6">
                                                                <div className="single-instructor d-flex align-items-center mb-30">
                                                                    <div className="instructor-thumb">
                                                                        <img src="img/bg-img/t1.png" alt="" />
                                                                    </div>
                                                                    <div className="instructor-info">
                                                                        <h5>Sarah Parker</h5>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div className="col-lg-6">
                                                                <div className="single-instructor d-flex align-items-center mb-30">
                                                                    <div className="instructor-thumb">
                                                                        <img src="img/bg-img/t2.png" alt="" />
                                                                    </div>
                                                                    <div className="instructor-info">
                                                                        <h5>Sarah Parker</h5>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div className="col-lg-6">
                                                                <div className="single-instructor d-flex align-items-center mb-30">
                                                                    <div className="instructor-thumb">
                                                                        <img src="img/bg-img/t3.png" alt="" />
                                                                    </div>
                                                                    <div className="instructor-info">
                                                                        <h5>Sarah Parker</h5>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div className="col-lg-6">
                                                                <div className="single-instructor d-flex align-items-center mb-30">
                                                                    <div className="instructor-thumb">
                                                                        <img src="img/bg-img/t4.png" alt="" />
                                                                    </div>
                                                                    <div className="instructor-info">
                                                                        <h5>Sarah Parker</h5>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div className="col-lg-6">
                                                                <div className="single-instructor d-flex align-items-center mb-30">
                                                                    <div className="instructor-thumb">
                                                                        <img src="img/bg-img/t1.png" alt="" />
                                                                    </div>
                                                                    <div className="instructor-info">
                                                                        <h5>Sarah Parker</h5>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div className="col-lg-6">
                                                                <div className="single-instructor d-flex align-items-center mb-30">
                                                                    <div className="instructor-thumb">
                                                                        <img src="img/bg-img/t2.png" alt="" />
                                                                    </div>
                                                                    <div className="instructor-info">
                                                                        <h5>Sarah Parker</h5>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div className="col-lg-6">
                                                                <div className="single-instructor d-flex align-items-center mb-30">
                                                                    <div className="instructor-thumb">
                                                                        <img src="img/bg-img/t3.png" alt="" />
                                                                    </div>
                                                                    <div className="instructor-info">
                                                                        <h5>Sarah Parker</h5>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div className="col-lg-6">
                                                                <div className="single-instructor d-flex align-items-center mb-30">
                                                                    <div className="instructor-thumb">
                                                                        <img src="img/bg-img/t4.png" alt="" />
                                                                    </div>
                                                                    <div className="instructor-info">
                                                                        <h5>Sarah Parker</h5>
                                                                    </div>
                                                                </div>
                                                            </div>
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
                                                                <h2>4.5</h2>
                                                                <div className="ratings--">
                                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                                    <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                                                </div>
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


                                                    <div className="single-review mb-30">
                                                        <div className="d-flex justify-content-between mb-30">

                                                            <div className="review-admin d-flex">
                                                                <div className="thumb">
                                                                    <img src="img/bg-img/t1.png" alt="" />
                                                                </div>
                                                                <div className="text">
                                                                    <h6>Sarah Parker</h6>
                                                                    <span>Sep 29, 2017 at 9:48 am</span>
                                                                </div>
                                                            </div>

                                                            <div className="ratings">
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis.</p>
                                                    </div>


                                                    <div className="single-review mb-30">
                                                        <div className="d-flex justify-content-between mb-30">

                                                            <div className="review-admin d-flex">
                                                                <div className="thumb">
                                                                    <img src="img/bg-img/t1.png" alt="" />
                                                                </div>
                                                                <div className="text">
                                                                    <h6>Sarah Parker</h6>
                                                                    <span>Sep 29, 2017 at 9:48 am</span>
                                                                </div>
                                                            </div>

                                                            <div className="ratings">
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-lg-4">
                                <div className="course-sidebar">

                                    <Link to className="btn clever-btn mb-30 w-100" onClick = {this.bookTour}>{this.state.booked ? "DONE" : "Book Now"}</Link>


                                    <div className="sidebar-widget">
                                        <h4>Tour Features</h4>
                                        <ul className="features-list">
                                            <li>
                                                <h6><i className="fa fa-clock-o" aria-hidden="true"></i> Duration</h6>
                                                <h6>1 Weeks</h6>
                                            </li>
                                            <li>
                                                <h6><i className="fa fa-bell" aria-hidden="true"></i> Tour Guides</h6>
                                                <h6>4</h6>
                                            </li>
                                            <li>
                                                <h6><i className="fa fa-file" aria-hidden="true"></i> Vehicle</h6>
                                                <h6>Airplance + Car</h6>
                                            </li>
                                            <li>
                                                <h6><i className="fa fa-thumbs-up" aria-hidden="true"></i> Already enrolled </h6>
                                                <h6>60</h6>
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
                                                <h6>1 ethers</h6>
                                            </div>
                                        </div>
                                        <div className="single--courses d-flex align-items-center">
                                            <div className="thumb">
                                                <img src="https://media.vietravel.net/Images/NewsPicture/1-doi-che-cau-dat.jpg" alt="" />
                                            </div>
                                            <div className="content">
                                                <h5>Đà Lạt</h5>
                                                <h6>1 ether</h6>
                                            </div>
                                        </div>
                                        <div className="single--courses d-flex align-items-center">
                                            <div className="thumb">
                                                <img src="https://lh3.googleusercontent.com/proxy/DWt-peqk9_y4MsX9LAlfrkqBuXh3iwuSxPNjUwJy3XGUQWo250vHFx1BKAubMVO0-650D8dPQ1bYTbCsg4ke6fBijDxUpVCPdaoZKqfGiO8qnXfZk5bAiNL1kKyy-BUTbg" alt="" />
                                            </div>
                                            <div className="content">
                                                <h5>Sa Pa</h5>
                                                <h6>1 ether</h6>
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
    return {
        web3: state.web3,
        tourChainContract: state.tourChainContract
    }
}


// const mapDispatchToProps = (dispatch) => {
//     return {
//         onUpdateJCTToken: (erc20Contract, account) => dispatch(actionCreators.updateJCTTokens(erc20Contract, account))
//     }
// }

export default connect(mapStateToProps)(SingleCourse)