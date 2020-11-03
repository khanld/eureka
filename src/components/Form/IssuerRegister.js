import React from 'react'
import Form from '../../containers/ContactForm/ContactForm'
// import { connect } from 'react-redux'
// import { Redirect } from 'react-router-dom'

const IssuerRegister = (props) => (
    <React.Fragment>
         <Form issuer header={props.title} register={props.register} login={props.login} createTour={props.createTour}/>
    </React.Fragment>
)

// const mapStateToProps = (state) => {
//     return {
//         isFounder: state.web3.currentProvider.selectedAddress === "0x9113a1d7a8d600f69024550c276106bdcd52259a"
//     }
// }


export default IssuerRegister