import React, { Component } from 'react';
import Landing from '../components/landing/Landing';
import Navigation from '../components/navigation/Navigation';
import Auth from '../components/auth/Auth';
import Massage from '../components/massage/Massage';
import PrivateRoute from '../components/utils/PrivateRoute';
import Appointment from '../components/massage/Appointment'
import { checkForToken } from '../components/auth/actions';
import { connect } from 'react-redux';
import MyAppointments from '../components/appointments/MyAppointments'

import { 
  BrowserRouter as Router, 
  Route,
  Switch,
  Redirect 
} from 'react-router-dom';



class App extends Component {
  componentDidMount() {
    this.props.checkForToken();
  }
 
  render() {
    return (
      <Router>
        <div className="App">
          <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
            <title>HealthiHost</title>
          </head>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route exact path="/login" component={Auth}/>
              <Route exact path="/massage" component={Massage}/>
              <PrivateRoute exact path="/appointment" component={Appointment}/>
              <PrivateRoute exact path="/me/appointments" component={Appointment}/>
              <Redirect to="/"/>
            </Switch>   
        </div>
      </Router>
    );
  }
}




export default connect(({ auth }) => ({
  error: auth.error
}),
{ checkForToken }
)(App);
