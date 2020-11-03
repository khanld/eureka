import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import { Route } from 'react-router-dom'
import Home from './containers/Home/Home'
import { connect } from "react-redux"
import Spinner from './components/UI/Spinner/Spinner'
import { withRouter, Switch } from 'react-router-dom'
import Form from './components/Form/IssuerRegister'
import Companies from './containers/Manament/Companies';
import Issuers from './containers/Manament/Issuers';
import Guide from './containers/Guide/Guide';
import Bookings from './components/Bookings/Bookings';
import Tour from './components/Tours/Tours';
import Bookingdetails from './components/Bookings/Booking/Booking'
import TourDetails from './components//Tours/Tour/Tour'
import { Redirect } from 'react-router-dom'
//import LuckyWheel from './components/LuckyWheel/LuckyWheel';
import Jobs from './containers/Jobs/Jobs';
import Playground from './containers/PLayground/Playground';
import Service from './containers/Service/Service';
import DataPackage from './containers/DataPakage/DataPackage';
import CV from './components/CV/CV';

class App extends Component {
  render() {
    let content = (
      <Layout inHome={this.props.location.pathname === "/"}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={()=>(<Form title="Register Form" register></Form>)} />
          <Route path="/login" component={()=>(<Form  title="Login Form" login></Form>)} />
          <Route path="/companyList" component={Companies} />
          <Route path="/SchoolList" component={Issuers} />
          <Route path="/bookings" exact component={Bookings} />
          <Route path="/tour" exact component={Tour} />
          <Route path="/tour/create" component={()=>(<Form title="Creater Tour" createTour></Form>)} />
          <Route path="/cv" exact component={CV} />
          <Route path="/bookings/bookingdetails" exact component={Bookingdetails} />
          <Route path="/tour/details" exact component={TourDetails} />
          <Route path="/tour/details/guide" exact component={Guide} />
          <Route path="/playground" component={Playground} />
          <Route path="/history" component={Jobs} />
          <Route path="/service" component={Service} />
          <Route path="/CVPackage" component={DataPackage} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    )
    if (this.props.loading) content = <div style={{ position: "fixed", top: "30%", left: "0", right: "0" }}><Spinner /></div>
    if (this.props.error) content = <p>Error</p>

    return (
      <React.Fragment>
        {content}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps)(withRouter(App));
