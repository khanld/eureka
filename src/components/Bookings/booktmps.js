import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from '../UI/Dropdown/Dropdown'
import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const Course = (props) => {
    window.scrollTo({ top: 0 });
    return (
        <React.Fragment>
            <div className="breadcumb-area">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to>Course</Link></li>
                    </ol>
                </nav>
            </div>
            <div className="clever-catagory bg-img d-flex align-items-center justify-content-center p-3" style={{ backgroundImage: "url(img/bg-img/bg2.jpg)" }}>
                <h3>Choose &amp; your destination</h3>
            </div>

            <section className="popular-courses-area section-padding-100">
                <div className="container">
                    {/* <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
                        <Select
                            native
                            value={state.age}
                            onChange={handleChange}
                            inputProps={{
                                name: 'age',
                                id: 'age-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                    </FormControl> */}
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-popular-course mb-100 wow fadeInUp" data-wow-delay="250ms">
                                <img src="https://dulich9.com/wp-content/uploads/2019/02/kinh-nghiem-du-loch-da-nang-0.jpg" alt="" />
                                <div className="course-content">
                                    <h4>Đà Nẵng</h4>
                                    <div className="meta d-flex align-items-center">
                                        <Link to="/bookings/bookingdetails">Sarah Parker</Link>
                                        <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                        <Link to="/bookings/bookingdetails">Art &amp; Design</Link>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis</p>
                                </div>
                                <div className="seat-rating-fee d-flex justify-content-between">
                                    <div className="seat-rating h-100 d-flex align-items-center">
                                        <div className="seat">
                                            <i className="fa fa-user" aria-hidden="true"></i> 10
                                </div>
                                        <div className="rating">
                                            <i className="fa fa-star" aria-hidden="true"></i> 4.5
                                </div>
                                    </div>
                                    <div className="course-fee h-100">
                                        <Link to="/bookings/bookingdetails" className="free">1 ether</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-popular-course mb-100 wow fadeInUp" data-wow-delay="500ms">
                                <img src="https://media.truyenhinhdulich.vn/upload/news/154_hue.jpg" alt="" />
                                <div className="course-content">
                                    <h4>Huế</h4>
                                    <div className="meta d-flex align-items-center">
                                        <Link to="/bookings/bookingdetails">Sarah Parker</Link>
                                        <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                        <Link to="/bookings/bookingdetails">Art &amp; Design</Link>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis</p>
                                </div>
                                <div className="seat-rating-fee d-flex justify-content-between">
                                    <div className="seat-rating h-100 d-flex align-items-center">
                                        <div className="seat">
                                            <i className="fa fa-user" aria-hidden="true"></i> 10
                                </div>
                                        <div className="rating">
                                            <i className="fa fa-star" aria-hidden="true"></i> 4.5
                                </div>
                                    </div>
                                    <div className="course-fee h-100">
                                        <Link to="/bookings/bookingdetails">1 ether</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-popular-course mb-100 wow fadeInUp" data-wow-delay="750ms">
                                <img src="https://cafefcdn.com/thumb_w/650/2017/hanoi-old-quarter-jpg-1498451747871-47-2-852-1512-crop-1498451758581-1498466151321.jpg" alt="" />
                                <div className="course-content">
                                    <h4>Hà Nội</h4>
                                    <div className="meta d-flex align-items-center">
                                        <Link to="/bookings/bookingdetails">Sarah Parker</Link>
                                        <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                        <Link to="/bookings/bookingdetails">Art &amp; Design</Link>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis</p>
                                </div>
                                <div className="seat-rating-fee d-flex justify-content-between">
                                    <div className="seat-rating h-100 d-flex align-items-center">
                                        <div className="seat">
                                            <i className="fa fa-user" aria-hidden="true"></i> 10
                                </div>
                                        <div className="rating">
                                            <i className="fa fa-star" aria-hidden="true"></i> 4.5
                                </div>
                                    </div>
                                    <div className="course-fee h-100">
                                        <Link to="/bookings/bookingdetails">1 ether</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-popular-course mb-100 wow fadeInUp" data-wow-delay="250ms">
                                <img src="https://baoquocte.vn/stores/news_dataimages/dangtuan/052020/27/22/ba-ria-vung-tau-tang-toc-de-ve-dich.jpg" alt="" />
                                <div className="course-content">
                                    <h4>Vũng Tàu</h4>
                                    <div className="meta d-flex align-items-center">
                                        <Link to="/bookings/bookingdetails">Sarah Parker</Link>
                                        <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                        <Link to="/bookings/bookingdetails">Art &amp; Design</Link>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis</p>
                                </div>
                                <div className="seat-rating-fee d-flex justify-content-between">
                                    <div className="seat-rating h-100 d-flex align-items-center">
                                        <div className="seat">
                                            <i className="fa fa-user" aria-hidden="true"></i> 10
                                </div>
                                        <div className="rating">
                                            <i className="fa fa-star" aria-hidden="true"></i> 4.5
                                </div>
                                    </div>
                                    <div className="course-fee h-100">
                                        <Link to="/bookings/bookingdetails">1 ether</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-popular-course mb-100 wow fadeInUp" data-wow-delay="500ms">
                                <img src="https://cdn.getyourguide.com/img/tour/5b6a4c9fcf6df.jpeg/146.jpg" alt="" />
                                <div className="course-content">
                                    <h4>Nha Trang</h4>
                                    <div className="meta d-flex align-items-center">
                                        <Link to="/bookings/bookingdetails">Sarah Parker</Link>
                                        <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                        <Link to="/bookings/bookingdetails">Art &amp; Design</Link>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis</p>
                                </div>
                                <div className="seat-rating-fee d-flex justify-content-between">
                                    <div className="seat-rating h-100 d-flex align-items-center">
                                        <div className="seat">
                                            <i className="fa fa-user" aria-hidden="true"></i> 10
                                </div>
                                        <div className="rating">
                                            <i className="fa fa-star" aria-hidden="true"></i> 4.5
                                </div>
                                    </div>
                                    <div className="course-fee h-100">
                                        <Link to="/bookings/bookingdetails" className="free">1 ether</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-popular-course mb-100 wow fadeInUp" data-wow-delay="750ms">
                                <img src="https://cdnmedia.thethaovanhoa.vn/Upload/tyTrfgkgEUQwPYuvZ4Kn1g/files/2020/05/1205/tphcm.jpg" alt="" />
                                <div className="course-content">
                                    <h4>TP. Hồ Chí Minh</h4>
                                    <div className="meta d-flex align-items-center">
                                        <Link to="/bookings/bookingdetails">Sarah Parker</Link>
                                        <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                        <Link to="/bookings/bookingdetails">Art &amp; Design</Link>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis</p>
                                </div>
                                <div className="seat-rating-fee d-flex justify-content-between">
                                    <div className="seat-rating h-100 d-flex align-items-center">
                                        <div className="seat">
                                            <i className="fa fa-user" aria-hidden="true"></i> 10
                                </div>
                                        <div className="rating">
                                            <i className="fa fa-star" aria-hidden="true"></i> 4.5
                                </div>
                                    </div>
                                    <div className="course-fee h-100">
                                        <Link to="/bookings/bookingdetails">1 ether</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-popular-course mb-100 wow fadeInUp" data-wow-delay="250ms">
                                <img src="data:image/jpeg;base64,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" alt="" />
                                <div className="course-content">
                                    <h4>Mũi Né</h4>
                                    <div className="meta d-flex align-items-center">
                                        <Link to="/bookings/bookingdetails">Sarah Parker</Link>
                                        <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                        <Link to="/bookings/bookingdetails">Art &amp; Design</Link>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis</p>
                                </div>
                                <div className="seat-rating-fee d-flex justify-content-between">
                                    <div className="seat-rating h-100 d-flex align-items-center">
                                        <div className="seat">
                                            <i className="fa fa-user" aria-hidden="true"></i> 10
                                </div>
                                        <div className="rating">
                                            <i className="fa fa-star" aria-hidden="true"></i> 4.5
                                </div>
                                    </div>
                                    <div className="course-fee h-100">
                                        <Link to="/bookings/bookingdetails" className="free">1 ether</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-popular-course mb-100 wow fadeInUp" data-wow-delay="500ms">
                                <img src="https://media.vietravel.net/Images/NewsPicture/1-doi-che-cau-dat.jpg" alt="" />
                                <div className="course-content">
                                    <h4>Đà Lạt</h4>
                                    <div className="meta d-flex align-items-center">
                                        <Link to="/bookings/bookingdetails">Sarah Parker</Link>
                                        <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                        <Link to="/bookings/bookingdetails">Art &amp; Design</Link>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis</p>
                                </div>
                                <div className="seat-rating-fee d-flex justify-content-between">
                                    <div className="seat-rating h-100 d-flex align-items-center">
                                        <div className="seat">
                                            <i className="fa fa-user" aria-hidden="true"></i> 10
                                </div>
                                        <div className="rating">
                                            <i className="fa fa-star" aria-hidden="true"></i> 4.5
                                </div>
                                    </div>
                                    <div className="course-fee h-100">
                                        <Link to="/bookings/bookingdetails">1 ether</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-popular-course mb-100 wow fadeInUp" data-wow-delay="750ms">
                                <img src="https://cungphuot.info/wp-content/uploads/2013/11/kinh-nghiem-du-lich-sapa.jpg" alt="" />
                                <div className="course-content">
                                    <h4>Sa Pa</h4>
                                    <div className="meta d-flex align-items-center">
                                        <Link to="/bookings/bookingdetails">Sarah Parker</Link>
                                        <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                        <Link to="/bookings/bookingdetails">Art &amp; Design</Link>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis</p>
                                </div>
                                <div className="seat-rating-fee d-flex justify-content-between">
                                    <div className="seat-rating h-100 d-flex align-items-center">
                                        <div className="seat">
                                            <i className="fa fa-user" aria-hidden="true"></i> 10
                                </div>
                                        <div className="rating">
                                            <i className="fa fa-star" aria-hidden="true"></i> 4.5
                                </div>
                                    </div>
                                    <div className="course-fee h-100">
                                        <Link to="/bookings/bookingdetails">1 ethers</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="load-more text-center wow fadeInUp" data-wow-delay="1000ms">
                                <Link to="/#" className="btn clever-btn btn-2">Load More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Course