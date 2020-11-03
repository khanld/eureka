import React, { Component } from 'react'
import Input from '../../components/UI/Input/Input'
import classes from './Contact.module.css'
import Button from '../../components/UI/Button/Button'
import Spinner from '../../components/UI/Spinner/Spinner'
import { connect } from 'react-redux'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import * as actionCreators from '../../store/actions/actionCreators'
import { axios } from '../../axios'
import { Redirect } from "react-router-dom";
import AddButton from '../../components/UI/AddIcon/AddIcon'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Dropdown from '../../components/UI/Select/Select'

class ContactForm extends Component {
    state = {
        header: '',
        creator: '',
        city: '',
        price: '',
        tourguides: [],
        category: [],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis",
        duration: '',
        imageTour: "https://images.foody.vn/res/g65/647115/prof/s576x330/foody-upload-api-foody-mobile-avar22-jpg-180823142215.jpg",
        src: "https://www.google.com/maps/d/embed?mid=1EPnkSG4tjsU3jiBs0tZ6P5CoJLHqQvPA",
        curriculumn: [
        ],
        curriculumnCount: 1,
        pubKey: "",
        email: "",
        name: "",
        address: "",
        password: "",
        image: "https://image.freepik.com/free-vector/little-kid-avatar-profile_18591-50415.jpg",
        phone: "",
        loading: false,
        error: false
    }

    getInputValue = (event, type, index) => {
        if (type === "pubKey") {
            this.setState({
                pubKey: event.target.value
            })
        }
        if (type === "email") {
            this.setState({
                email: event.target.value
            })
        }
        if (type === "name") {
            this.setState({
                name: event.target.value
            })
        }
        if (type === "address") {
            this.setState({
                address: event.target.value
            })
        }
        if (type === "password") {
            this.setState({
                password: event.target.value
            })
        }
        if (type === "image") {
            this.setState({
                image: event.target.value === '' ? this.state.image : event.target.value
            })
        }
        if (type === "phone") {
            this.setState({
                phone: event.target.value
            })
        }



        //CREATE TOUR
        if (type === "tourname") {
            this.setState({
                header: event.target.value
            })
        }
        if (type === "description") {
            this.setState({
                description: event.target.value
            })
        }
        if (type === "price") {
            this.setState({
                price: event.target.value
            })
        }
        if (type === "duration") {
            this.setState({
                duration: event.target.value
            })
        }
        if (type === "imageTour") {
            this.setState({
                imageTour: event.target.value
            })
        }
        if (type === "src") {
            this.setState({
                src: event.target.value === '' ? this.state.image : event.target.value
            })
        }
        if (type === "category") {
            let category = [...this.state.category]
            category.push(event.target.value)
            this.setState({
                category
            })
        }
        // console.log(type, index, "placeName" + (this.state.curriculumn.length - 1), type === "placeName" + this.state.curriculumn.length - 1)
        if (type === "placeName" + this.state.curriculumn.length) {
            console.log(index, this.state.curriculumn.length)
            let curriculumn = this.state.curriculumn.map(tmp => { return { ...tmp } })
            curriculumn.push({
                placeName: "", // Điền chỗ này
                rate: Math.floor(Math.random() * 5 + 1),
                description: "", // Điền chỗ này
                lat: 0, // Điền chỗ này
                long: 0, // Điền chỗ này

            })
            // console.log(index, curriculumn.length)
            curriculumn[curriculumn.length - 1].placeName = event.target.value
            this.setState({
                curriculumn
            })
        } else if (type === "placeName" + (this.state.curriculumn.length - 1)) {
            let curriculumn = this.state.curriculumn.map(tmp => { return { ...tmp } })
            curriculumn[this.state.curriculumn.length - 1].placeName = event.target.value
            console.log(index, this.state.curriculumn.length)
            this.setState({
                curriculumn
            })
        }

        if (type === "placeDescription" + this.state.curriculumn.length) {
            let curriculumn = this.state.curriculumn.map(tmp => { return { ...tmp } })
            curriculumn.push({
                placeName: "", // Điền chỗ này
                rate: Math.floor(Math.random() * 5 + 1),
                description: "", // Điền chỗ này
                lat: 0, // Điền chỗ này
                long: 0, // Điền chỗ này

            })
            curriculumn[curriculumn.length - 1].description = event.target.value
            this.setState({
                curriculumn
            })
        } else if (type === "placeDescription" + (this.state.curriculumn.length - 1)) {
            let curriculumn = this.state.curriculumn.map(tmp => { return { ...tmp } })
            curriculumn[curriculumn.length - 1].description = event.target.value
            this.setState({
                curriculumn
            })
        }

        if (type === "lat" + this.state.curriculumn.length) {
            let curriculumn = this.state.curriculumn.map(tmp => { return { ...tmp } })
            curriculumn.push({
                placeName: "", // Điền chỗ này
                rate: Math.floor(Math.random() * 5 + 1),
                description: "", // Điền chỗ này
                lat: 0, // Điền chỗ này
                long: 0, // Điền chỗ này

            })
            curriculumn[curriculumn.length - 1].lat = event.target.value
            this.setState({
                curriculumn
            })
        } else if (type === "lat" + (this.state.curriculumn.length - 1)) {
            let curriculumn = this.state.curriculumn.map(tmp => { return { ...tmp } })
            curriculumn[curriculumn.length - 1].lat = event.target.value
            this.setState({
                curriculumn
            })
        }

        if (type === "long" + this.state.curriculumn.length) {
            let curriculumn = this.state.curriculumn.map(tmp => { return { ...tmp } })
            curriculumn.push({
                placeName: "", // Điền chỗ này
                rate: Math.floor(Math.random() * 5 + 1),
                description: "", // Điền chỗ này
                lat: 0, // Điền chỗ này
                long: 0, // Điền chỗ này

            })
            curriculumn[curriculumn.length - 1].long = event.target.value
            this.setState({
                curriculumn
            })
        } else if (type === "long" + (this.state.curriculumn.length - 1)) {
            let curriculumn = this.state.curriculumn.map(tmp => { return { ...tmp } })
            curriculumn[curriculumn.length - 1].long = event.target.value
            this.setState({
                curriculumn
            })
        }

    }

    register = async () => {
        try {
            this.setState({ loading: true, error: false })
            const response = await axios.post('/users/create', {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                phone: this.state.phone,
                description: this.state.address,
                image: this.state.image
            });
            console.log(response)
            store.addNotification({
                title: "Wonderful!",
                message: "Create Successfully",
                type: "success",
                insert: "bottom",
                container: "bottom-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });
            this.setState({
                loading: false, error: false,
                pubKey: "",
                email: "",
                name: "",
                address: "",
                degreeType: "",
                falcuty: "",
                graduationYear: "",
                classification: "",
                modeOfStudy: "",
                dateOfBirth: ""
            })
        } catch (e) {
            console.log(e)
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
            this.setState({ loading: false, error: true })
        }
    }

    login = async () => {
        try {
            this.setState({ loading: true, error: false })
            const response = await axios.post('/users/login', {
                email: this.state.email,
                password: this.state.password
            });
            if(!response.data.status) throw 'error'
            const jwt = response.data.data.token;
            localStorage.setItem('jwt', jwt)
            await this.props.onUpdateUser();
            await this.props.onUpdateLogin(jwt);

            if (response.data.status === false) throw "Something went wrong"
            store.addNotification({
                title: "Wonderful!",
                message: "Hello " + this.props.user.name + "!!!",
                type: "success",
                insert: "bottom",
                container: "bottom-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });
            this.setState({
                loading: false, error: false,
                pubKey: "",
                email: "",
                name: "",
                address: "",
                degreeType: "",
                falcuty: "",
                graduationYear: "",
                classification: "",
                modeOfStudy: "",
                dateOfBirth: ""
            })
        } catch (e) {
            console.log(e)
            store.addNotification({
                title: "Error!",
                message: "Please check your email and password!",
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
            this.setState({ loading: false, error: true })
        }
    }

    addMoreTour = () => {
        let curriculumnCount = this.state.curriculumnCount + 1;
        this.setState({
            curriculumnCount
        })
        console.log(curriculumnCount)
    }

    createNewTour = async () => {
        try {
            if(!this.props.user) throw 'login'
            console.log(this.props.user)
            const response = await axios.post('/tours/create', {
                header: this.state.header,
                creator: this.props.user._id,
                description: this.state.description,
                duration: Number(this.state.duration),
                city: this.state.city,
                price: Number(this.state.price),
                image: this.state.imageTour,
                src: this.state.src,
                curriculumn: this.state.curriculumn,
                tourguides: []
            })
            console.log(response)
            store.addNotification({
                title: "Wonderful!",
                message: "Create Successfully",
                type: "success",
                insert: "bottom",
                container: "bottom-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });
            this.setState({ loading: false, error: false })
        } catch (e) {
            console.log(e)
            store.addNotification({
                title: "Error!",
                message: "Please login in!",
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
            this.setState({ loading: false, error: true })
        }
    }

    handleChangeCity = (event) => {
        console.log(event.target.value)
        this.setState({
            city: event.target.value
        })
    }

    render() {
        let formType = classes.RegisterForm
        let curriculumnComponent = [];
        for (let index = 0; index < this.state.curriculumnCount; index++) {
            curriculumnComponent.push(
                <div style={{
                    display: "flex", justifyContent: "center", flexDirection: "column",
                    alignItems: "flex-start", border: "1.5px solid white",
                    marginBottom: "10px", marginTop: "20px",
                    marginLeft: "20%", marginRight: "20%", paddingBottom: "20px", paddingLeft: "15px"
                }}>
                    <h3 style={{ textAlign: "center" }}>Place {index + 1}</h3>
                    <p>Name: </p>
                    <Input
                        onchangedHandler={(event) => this.getInputValue(event, "placeName" + index, index)}
                        placeholder="Name of this tour"
                        value={''} />
                    <p>Description: </p>
                    <Input
                        onchangedHandler={(event) => this.getInputValue(event, "placeDescription" + index, index)}
                        placeholder="Write a description about this place"
                        value={''} />
                    <p>Latitude: </p>
                    <Input
                        onchangedHandler={(event) => this.getInputValue(event, "lat" + index, index)}
                        placeholder="Enter the latitude"
                        value={''} />
                    <p>Longitude: </p>
                    <Input
                        onchangedHandler={(event) => this.getInputValue(event, "long" + index, index)}
                        placeholder="Enter the Google Map Link"
                        value={''} />
                </div>

            )
        }
        let content = (
            <React.Fragment>
                <p>Username: </p>
                <Input
                    onchangedHandler={(event) => this.getInputValue(event, "name")}
                    placeholder="Enter your name"
                    value={this.state.name} />
                <p>Email: </p>
                <Input
                    onchangedHandler={(event) => this.getInputValue(event, "email")}
                    placeholder="Enter your email"
                    value={this.state.email} />
                <p>Address: </p>
                <Input
                    onchangedHandler={(event) => this.getInputValue(event, "address")}
                    placeholder="Enter your address"
                    value={this.state.address} />
                <p>Password: </p>
                <Input
                    onchangedHandler={(event) => this.getInputValue(event, "password")}
                    placeholder="Enter your password"
                    value={this.state.password}
                    type="password"
                />
                <p>Image: </p>
                <input style={{marginLeft: "20%"}}
                    type="file" />
                {/* <Input
                    onchangedHandler={(event) => this.getInputValue(event, "image")}
                    placeholder="Enter your Image link"
                    value={this.state.image} />
                <Input
                    onchangedHandler={(event) => this.getInputValue(event, "image")}
                    placeholder="Enter your Image link"
                    value={this.state.image} /> */}

                <p>Phone Number: </p>
                <Input
                    onchangedHandler={(event) => this.getInputValue(event, "phone")}
                    placeholder="Enter your phone number"
                    value={this.state.phone} />
                <Button onSubmitHandler={this.register}>Submit</Button>
            </React.Fragment>
        )
        if (this.props.login) content = (
            <React.Fragment>
                <p>Email: </p>
                <Input
                    onchangedHandler={(event) => this.getInputValue(event, "email")}
                    placeholder="Enter your email"
                    value={this.state.email} />
                <p>Password: </p>
                <Input
                    onchangedHandler={(event) => this.getInputValue(event, "password")}
                    placeholder="Enter your password"
                    value={this.state.password}
                    type="password"
                />
                <Button onSubmitHandler={this.login}>Submit</Button>
            </React.Fragment>
        )

        if (this.props.login) content = (
            <React.Fragment>
                <p>Email: </p>
                <Input
                    onchangedHandler={(event) => this.getInputValue(event, "email")}
                    placeholder="Enter your email"
                    value={this.state.email} />
                <p>Password: </p>
                <Input
                    onchangedHandler={(event) => this.getInputValue(event, "password")}
                    placeholder="Enter your password"
                    value={this.state.password}
                    type="password"
                />
                <Button onSubmitHandler={this.login}>Submit</Button>
            </React.Fragment>
        )

        if (this.props.createTour) {
            content = (
                <React.Fragment>
                    <p>Tour Name: </p>
                    <Input
                        onchangedHandler={(event) => this.getInputValue(event, "tourname")}
                        placeholder="Enter tour name"
                        value={this.state.header} />
                    <p>City: </p>
                    <div style={{ display: "flex", justifyContent: "flex-start", marginLeft: "20%" }}>
                        <Dropdown handleChangeCity={this.handleChangeCity}></Dropdown>
                    </div>
                    <p>Description: </p>
                    <Input
                        onchangedHandler={(event) => this.getInputValue(event, "description")}
                        placeholder="Write a description about your tour"
                        value={this.state.description} />
                    <p>Category: </p>
                    <div style={{ display: "flex", alignItems: "flex-start", flexDirection: "column", marginLeft: "25%" }}>
                        <span style={{ marginRight: "30px" }}>
                            <input type="checkbox" value="Đồ Ăn" style={{ marginRight: "10px" }} onClick={(event) => this.getInputValue(event, "catetory")} />
                            <label>   Đồ Ăn</label>
                        </span>
                        <span style={{ marginRight: "30px" }}>
                            <input type="checkbox" value="Đồ uống" style={{ marginRight: "10px" }} onClick={(event) => this.getInputValue(event, "category")} />
                            <label>   Đồ uống</label>
                        </span>
                        <span style={{ marginRight: "30px" }}>
                            <input type="checkbox" value="Hẹn hò" style={{ marginRight: "10px" }} onClick={(event) => this.getInputValue(event, "category")} />
                            <label>   Hẹn hò</label>
                        </span>
                        <span style={{ marginRight: "30px" }}>
                            <input type="checkbox" value="Danh lam thắng cảnh" style={{ marginRight: "10px" }} onClick={(event) => this.getInputValue(event, "category")} />
                            <label>   Danh lam thắng cảnh</label>
                        </span>
                        <span style={{ marginRight: "30px" }}>
                            <input type="checkbox" value="Văn Hóa địa phương" style={{ marginRight: "10px" }} onClick={(event) => this.getInputValue(event, "category")} />
                            <label>   Văn Hóa địa phương</label>
                        </span>
                    </div>

                    <p>Total cost: </p>
                    <Input
                        onchangedHandler={(event) => this.getInputValue(event, "price")}
                        placeholder="Total cost of the tour"
                        value={this.state.price} />
                    <p>Duration: </p>
                    <Input
                        onchangedHandler={(event) => this.getInputValue(event, "duration")}
                        placeholder="How long does this tour take"
                        value={this.state.duration}
                    />
                    <p>Image Link: </p>
                    <Input
                        onchangedHandler={(event) => this.getInputValue(event, "imageTour")}
                        placeholder="Enter the Image link"
                        value={this.state.imageTour} />
                    <p>Google Map Link: </p>
                    <Input
                        onchangedHandler={(event) => this.getInputValue(event, "src")}
                        placeholder="Enter the Google Map Link"
                        value={this.state.src} />
                    {curriculumnComponent.map((el) => el)}
                    <div style={{ display: "flex", justifyContent: "center" }}><AddButton onClickHandler={this.addMoreTour}></AddButton></div>
                    <Button onSubmitHandler={this.createNewTour}>Submit</Button>
                </React.Fragment >
            )
        }

        if (this.state.loading) content = <Spinner />
        return (
            <div className={[classes.ContactForm, formType].join(' ')}>
                {this.props.isLogin && !this.props.createTour ? <Redirect to='/' /> : null}
                <h2>{this.props.header}</h2>
                {content}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        web3: state.web3,
        tourChainContract: state.tourChainContract,
        isLogin: (state.user) ? true : false,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateRegister: (tourChainContract, account) => dispatch(actionCreators.updateRegister(tourChainContract, account)),
        onUpdateLogin: (jwt) => dispatch(actionCreators.login(jwt)),
        onUpdateUser: (user) => dispatch(actionCreators.updateUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)