import React, { Component } from 'react';
import Landing from '../components/landing/Landing';
import Navigation from '../components/navigation/Navigation';
import Login from '../components/auth/Login';
import Massage from '../components/massage/Massage';
import { checkForToken } from '../components/auth/actions';
import { connect } from 'react-redux';

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
            <title>HealthiHost</title>
          </head>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/massage" component={Massage}/>
              {/* <Route exact path="/minerals" component={Minerals}/>
              <Route exact path="/movement" component={Movement}/> */}
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
