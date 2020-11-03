import React, { Component } from 'react'
import classes from './UserLogo.module.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class UserLogo extends Component {
    state = {
        isDropdown: false,
        certificates: []
    }

    toggleDropdown = () => {
        this.setState(() => ({
            isDropdown: !this.state.isDropdown
        }))
    }

    async componentDidMount() {
        // const certificates = await this.props.factory.methods.getCertificateList().call({
        //     from: window.ethereum.selectedAddress
        // })
        // this.setState({
        //     certificates
        // })
    }

    render() {
        let dropdownContentClasses = [classes.dropdownContent]
        if (this.state.isDropdown) dropdownContentClasses.push(classes.show)

        let role = "User"
        let content = (
            <React.Fragment>
                {this.props.user ?<Link to>{this.props.user.name}</Link> : null}
                <Link to>Your TRC: {this.props.TRCValue}</Link>
                <Link to="/mycourses">My Trip</Link>
                <Link to="/">Your Nemo token(s): {this.props.NemoValue}</Link>
                {(!this.props.registered && !this.props.isLogin)?
                    <Link to="/register">Register</Link>
                    : null
                }
                {!this.props.isLogin ?
                    <Link to="/login">Login</Link>
                    : null
                }
            </React.Fragment>
        )

        if (window.web3.currentProvider.selectedAddress === "0x9113a1d7a8d600f69024550c276106bdcd52259a") {
            role = "Founder"
        }

        return (
            <div className={["col-md-1", classes.UserLogo].join(' ')}>
                <div onClick={this.toggleDropdown}>
                    <i className="far fa-user"></i>

                    <div className={dropdownContentClasses.join(" ")}>
                        <Link to="">Role: {role}</Link>
                        {content}
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        web3: state.web3,
        NemoValue: state.NemoValue,
        TRCValue: state.TRCValue,
        registered: state.registered,
        isLogin: state.user,
        user: state.user
    }
}

export default connect(mapStateToProps)(UserLogo)