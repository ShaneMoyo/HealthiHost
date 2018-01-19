import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'


class Appointment extends Component {
  state = {
    createAccount: false,
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  onSubmit = () => {
    const { 
      createAccount,
      email,
      password,
      firstName,
      lastName
    } = this.state;

    const { signup, signin } = this.props;

    if(createAccount){
        signup({ email, password, firstName, lastName }) 
    } else {
        signin({ email, password })
    }
  }

  handleEmailChange = value => this.setState({ email: value });
  handlePasswordChange = value => this.setState({ password: value });
  handleFirstNameChange = value => this.setState({ firstName: value });
  handleLastNameChange = value => this.setState({ lastName: value });

  render(){
    const { 
      createAccount,
      email,
      password,
      firstName,
      lastName,
    } = this.state;

    let error = this.props.error ? 'Authentication Failed' : null;
    const redirect = window.location.state ? window.location.state.from : '/';

    if(this.props.user) return <Redirect to={redirect}/>;

    return(
          <div class="container has-text-centered">
            <div class="column is-8 is-offset-2">
              <div class="box" >
                  <h3 class="title has-text-grey">Book Appointment</h3>
                  <p class="subtitle has-text-grey">Please login to proceed.</p>
                  <hr/>
                    <div class="field">
                      <div class="control">
                        <input onChange={({ target }) => this.handleEmailChange(target.value)} value={email} class="input is-large" name="email" placeholder="Your Email" autofocus=""/>
                      </div>
                    </div>
                      { createAccount && 
                      <div class="field">
                        <div class="control">
                          <input onChange={({ target }) => this.handleFirstNameChange(target.value)} value={firstName} class="input is-large" name="firstName" placeholder="First Name" autofocus=""/>
                        </div>
                      </div>}
                      { createAccount && 
                      <div class="field">
                        <div class="control">
                          <input onChange={({ target }) => this.handleLastNameChange(target.value)} value={lastName} class="input is-large" name="lastName" placeholder="Last Name" autofocus=""/>
                        </div>
                      </div>}
                      <div class="field">
                        <div class="control">
                          <input onChange={({ target }) => this.handlePasswordChange(target.value)} value={password} class="input is-large" name="password" placeholder="Your Password"/>
                        </div>
                      </div>
                      <div class="field">
                      <div class="control has-text-centered">
                        <button onClick={() => this.onSubmit()} 
                        class={this.props.loading ? "button is-loading centered is-block is-info is-medium" : "button centered is-block is-info is-medium"} type="button">{ createAccount ? 'Create Account' : 'Log In' }</button>
                      </div>
                      </div>
                      { this.props.error &&
                      <div class="field">
                        <div class="button is-danger">{error}</div>
                      </div>
                      }
                    <hr/>
                    <div class="field">
                    <a class="button is-success is-outlined" onClick={() => this.setState({ createAccount: !createAccount })}>
                      { createAccount ? 'Log In' : 'Create an Account' }
                    </a>
                  </div>
                  </div>
                </div>
              </div>
    );
  }
}

export default connect(({ auth, loading, error }) => ({
  user: auth.user,
  error,
  loading

})
)(Appointment);