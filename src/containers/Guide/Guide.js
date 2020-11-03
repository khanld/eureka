import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React, { Component } from 'react'
import './Guide.css'
import GoogleMap from '../../components/GoogleMap/GoogleMap';
import Spinner from '../../components/UI/Spinner/Spinner'
import Modal from '../../components/UI/Modal/Modal'
import { connect } from 'react-redux'
import Rate from '../../components/UI/Rate/Rate'
//JobChain is a Recruitment Website which provides a blockchain-based solution to Educational and Resources management.

let id = null
class Guide extends Component {
    state = {
        loading: false,
        currentPos: {
            lat: 0,
            long: 0
        },
        destination: {
            latitude: 0,
            longitude: 0
        },
        modalShow: {
            show: false,
            message: ""
        },
        options: {
            enableHighAccuracy: false,
            timeout: 500,
            maximumAge: 0
        },
        data: null
    }

    async componentDidMount() {
        var url_string = window.location.href;
        var url = new URL(url_string);
        var index = url.searchParams.get("index");
        const data = this.props.TourData[Number(index)]
        this.setState({
            loading: true,
            modalShow: {
                show: false,
                message: ""
            },
            index,
            data
        })
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (pos) => {
                this.setState({
                    currentPos: {
                        lat: pos.coords.latitude,
                        long: pos.coords.longitude
                    },
                    destination: {
                        latitude: data.curriculumn[0].lat,
                        longitude: data.curriculumn[0].long
                    },
                    loading: false,
                    modalShow: {
                        show: false,
                        message: ""
                    }
                })
            }, async (error) => {
                console.log(error)
                this.setState({
                    loading: false,
                    modalShow: {
                        show: true,
                        message: "Geolocation is not supported by this browser"
                    }
                })
            });
        } else {
            this.setState({
                loading: false,
                modalShow: {
                    show: true,
                    message: "Geolocation is not supported by this browser"
                }
            })
        }

        //WATCHING
        id = navigator.geolocation.watchPosition(async (pos) => {
            var crd = pos.coords;
            console.log(crd, this.state.destination.lat !== crd.lat)
            if (this.state.currentPos.lat !== crd.latitude || this.state.currentPos.long !== crd.longitude) {
                this.setState({
                    currentPos: {
                        lat: crd.latitude, long: crd.longitude
                    }
                })
            }
            else if (this.state.destination.latitude === crd.latitude && this.state.destination.longitude === crd.longitude) {
                this.setState({
                    modalShow: {
                        show: true,
                        message: "Congratulations, you reached the target!!!"
                    }
                })
                navigator.geolocation.clearWatch(id);
            }
        }, async (err) => {
            console.log(err)
            this.setState({
                loading: false,
                modalShow: {
                    show: true,
                    message: "Geolocation is not supported by this browser"
                }
            })
        }, this.state.options);
    }
    async componentWillUnmount() {
        navigator.geolocation.clearWatch(id);
    }
    turnOffBackdrop = () => {
        this.setState({
            modalShow: {
                show: false,
                message: ""
            }
        })
    }

    updateDestination = async (id) => {
        console.log(this.state.data.curriculumn[id].lat, this.state.data.curriculumn[id].long)
        this.setState({
            destination: {
                latitude: this.state.data.curriculumn[id].lat,
                longitude: this.state.data.curriculumn[id].long
            },
        })
    }


    render() {
        window.scrollTo({ top: 0 });
        var url_string = window.location.href;
        var url = new URL(url_string);
        var index = url.searchParams.get("index");
        const data = this.props.TourData[Number(index)]
        const currentPos = {
            lat: 0,
            long: 0
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                currentPos.lat = pos.coords.latitude;
                    currentPos.long = pos.coords.longitude
            })
        }

        const destination = {
            latitude: data.curriculumn[0].lat,
            longitude: data.curriculumn[0].long
        }

        console.log(currentPos, destination)

        const iconList = [
            "cubes", "school", "building", "cubes", "school"
        ]
        console.log(this.state.currentPos, this.state.destination)
        return (
            <React.Fragment>
                {this.state.modalShow.show ?
                    <Modal show={this.state.modalShow} onBackdropClickHandler={this.turnOffBackdrop}>
                        <h3><i className="fas fa-exclamation-circle"></i></h3>
                        <p><strong>{this.state.modalShow.message}</strong></p>
                    </Modal> : null}
                {this.state.loading ?
                    <div style={{ position: "fixed", width: "100%", top: "40%" }}>
                        <Spinner />
                    </div> : null}

                {/* GOOGLE MAP */}
                <div><GoogleMap start={this.state.currentPos.lat !== 0 ? 
                    this.state.currentPos.lat + ',' + this.state.currentPos.long:
                    currentPos.lat + ',' +currentPos.long
                } end={this.state.destination.latitude + ',' + this.state.destination.longitude}></GoogleMap></div>


                <VerticalTimeline>
                    {data.curriculumn.map((place, index) => {
                        return (
                            <React.Fragment>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={index & 1 ? { background: 'rgb(165, 108, 3)', color: '#fff' } : { background: 'rgb(9, 56, 68)', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                    date="Adding process"
                                    iconStyle={index & 1 ? { background: 'rgb(165, 108, 3)', color: '#fff' } : { background: 'rgb(9, 56, 68)', color: '#fff' }}
                                    icon={<i
                                        onClick={() => this.updateDestination(index)}
                                        className={`fas fa-${iconList[index]}`}

                                        style={{
                                            position: "absolute",
                                            fontSize: "1.7em",
                                            left: "50%",
                                            top: "50%",
                                            transform: "translate(-50%, -50%)"
                                        }}></i>}
                                >
                                    <h3 className="vertical-timeline-element-title">{place.placeName}</h3>
                                    <h4 className="vertical-timeline-element-subtitle"><Rate rating={place.rate}></Rate></h4>
                                    <p>{place.description}</p>
                                </VerticalTimelineElement>
                            </React.Fragment>
                        )
                    })}

                </VerticalTimeline >
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        TourData: state.TourData
    }
}

export default connect(mapStateToProps)(Guide)