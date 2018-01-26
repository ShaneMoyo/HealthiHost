import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, render, user, ...rest }) => (
  <Route {...rest} render={props => {
    if(user) {
      return render ? render(props) : <Component {...props}/>;
    }
    console.log('pathnameee', props.location.pathname)
    return (
      <Redirect to={{
        pathname: '/Login',
        state: { from: props.location.pathname }
      }}/>
    );
  }}/>
);

export default connect(
  state => ({ user: state.auth.user }),
  null
)(PrivateRoute);