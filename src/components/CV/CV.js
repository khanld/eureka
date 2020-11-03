import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Spinner from '../UI/Spinner/Spinner'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import { Route } from 'react-router-dom'
import Modal from '../UI/Modal/Modal'
import Button from '../UI/Button/Button'

let url_string = null
let url = null
let index = null
let userId = null
let userData = null
let data = null
class CV extends React.Component {

    render() {
        window.scrollTo({top: 0})
        url_string = window.location.href;
        url = new URL(url_string);
        index = url.searchParams.get("index");
        userId = url.searchParams.get("id");
        data = this.props.TourData[index];
        console.log("CV: ", userId, data)
        data.tourguides.forEach(tourguide => {
            if(tourguide._id === userId) userData = tourguide
        });
        console.log("CV: ", index, userId, data, userData)
        let content = (<div className="wrapper">
            <div className="sidebar-wrapper">
                <div className="profile-container">
                    <img className="profile" src={userData.image} alt="" />
                    <h1 className="name">{userData.name}</h1>
                    <h3 className="tagline">Trường ĐH KInh Tế - Tài Chính TP. Hồ Chí Minh</h3>
                </div>

                <div className="contact-container container-block">
                    <ul className="list-unstyled contact-list">
                        <li className="email"><i className="fas fa-envelope"></i><Link >{userData.email}</Link></li>
                        <li className="phone"><i className="fas fa-phone"></i><Link >{userData.phone}</Link></li>
                        <li className="website"><i className="fas fa-globe"></i><Link  >portfoliosite.com</Link></li>
                        <li className="linkedin"><i className="fab fa-linkedin-in"></i><Link  >linkedin.com/in/alandoe</Link></li>
                        <li className="github"><i className="fab fa-github"></i><Link  >github.com/username</Link></li>
                        <li className="twitter"><i className="fab fa-twitter"></i><Link  >@twittername</Link></li>
                    </ul>
                </div>
                <div className="education-container container-block">
                    <h2 className="container-block-title">Education</h2>
                    <div className="item">
                        <h4 className="degree">Cử nhân du lịch</h4>
                        <h5 className="meta">Du lịch và khách sạn</h5>
                        <div className="time">2020</div>
                    </div>
                </div>

                <div className="languages-container container-block">
                    <h2 className="container-block-title">Languages</h2>
                    <ul className="list-unstyled interests-list">
                        <li>English <span className="lang-desc">(Native)</span></li>
                        <li>French <span className="lang-desc">(Professional)</span></li>
                        <li>Spanish <span className="lang-desc">(Professional)</span></li>
                    </ul>
                </div>

                <div className="interests-container container-block">
                    <h2 className="container-block-title">Interests</h2>
                    <ul className="list-unstyled interests-list">
                        <li>Climbing</li>
                        <li>Snowboarding</li>
                        <li>Cooking</li>
                    </ul>
                </div>

            </div>

            <div className="main-wrapper">

                <section className="section summary-section">
                    <h2 className="section-title"><span className="icon-holder"><i className="fas fa-user"></i></span>Career Profile</h2>
                    <div className="summary">
                        <p>Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can <Link href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/orbit-free-resume-cv-bootstrap-theme-for-developers/" >download this free resume/CV template here</Link>. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.</p>
                    </div>
                </section>

                <section className="section experiences-section">
                    <h2 className="section-title"><span className="icon-holder"><i className="fas fa-briefcase"></i></span>Experiences</h2>
    <h6 style={{ marginTop: "10px", marginBottom: "20px" }}>Number of tours have been guided by {userData.name}: {userData.yourTour.length} </h6>
                    {userData.yourTour.map((tour, index) => (
                        <div className="item" key={tour.header +'' + index}>
                            <div className="meta">
                                <div className="upper-row">
                                    <h2 className="job-title"><strong>{tour.header}</strong></h2>
                                    <div className="time"><strong><i className="far fa-check-circle" style={{ color: "green", fontWeight: "none" }}></i></strong> Confirmed by Nemo </div>
                                </div>
                                <div className="company"><strong>Rate: </strong>{tour.averageRating}</div>
                                <div className="company"><strong>City: </strong>{tour.city}</div>
                            </div>
                            <div className="details">
                                <p>{tour.description}</p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                            </div>
                        </div>
                    ))}

                </section>

                <section className="section projects-section">
                    <h2 className="section-title"><span className="icon-holder"><i className="fas fa-archive"></i></span>Projects</h2>
                    <div className="intro">
                        <p>You can list your side projects or open source libraries in this section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.</p>
                    </div>
                    <div className="item">
                        <span className="project-title"><Link href="#hook">Velocity</Link></span> - <span className="project-tagline">A responsive website template designed to help startups promote, market and sell their products.</span>

                    </div>
                    <div className="item">
                        <span className="project-title"><Link href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-web-development-agencies-devstudio/" >DevStudio</Link></span> -
            <span className="project-tagline">A responsive website template designed to help web developers/designers market their services. </span>
                    </div>
                    <div className="item">
                        <span className="project-title"><Link href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-startups-tempo/" >Tempo</Link></span> - <span className="project-tagline">A responsive website template designed to help startups promote their products or services and to attract users &amp; investors</span>
                    </div>
                    <div className="item">
                        <span className="project-title"><Link href="hhttp://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-mobile-apps-atom/" >Atom</Link></span> - <span className="project-tagline">A comprehensive website template solution for startups/developers to market their mobile apps. </span>
                    </div>
                    <div className="item">
                        <span className="project-title"><Link href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-mobile-apps-delta/" >Delta</Link></span> - <span className="project-tagline">A responsive Bootstrap one page theme designed to help app developers promote their mobile apps</span>
                    </div>
                </section>

                <section className="skills-section section">
                    <h2 className="section-title"><span className="icon-holder"><i className="fas fa-rocket"></i></span>Skills &amp; Proficiency</h2>
                    <div className="skillset">
                        <div className="item">
                            <h3 className="level-title">Python &amp; Django</h3>
                            <div className="progress level-bar">
                                <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: "99%" }} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="item">
                            <h3 className="level-title">Javascript &amp; jQuery</h3>
                            <div className="progress level-bar">
                                <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: "98%" }} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="item">
                            <h3 className="level-title">Angular</h3>
                            <div className="progress level-bar">
                                <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: "98%" }} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="item">
                            <h3 className="level-title">HTML5 &amp; CSS</h3>
                            <div className="progress level-bar">
                                <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="item">
                            <h3 className="level-title">Ruby on Rails</h3>
                            <div className="progress level-bar">
                                <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="item">
                            <h3 className="level-title">Sketch &amp; Photoshop</h3>
                            <div className="progress level-bar">
                                <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </div>)
        return (
            <div style={{ minHeight: "1400px" }}>
                {content}
            </div >
        )
    }

}

const mapStateToProps = (state) => {
    return {
        web3: state.web3,
        factory: state.factory,
        erc20Contract: state.erc20Contract,
        TourData: state.TourData,
    }
}


export default connect(mapStateToProps)(CV)