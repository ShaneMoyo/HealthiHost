import React, { Component } from 'react';
import { signin, signup, signout } from './actions';
import { connect } from 'react-redux';


class Login extends Component {
  state = {
    createAccount: false,

    email: '',
    password: '',
    firstName: '',
    lastName: '',
    missingPassword: false,
    missingEmail: false,
    missingFirstName: false,
    missingLastName: false
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
      if(!this.checkFields(true)) {
        signup({ email, password, firstName, lastName })
      }
    } else {
      if(!this.checkFields()) {
        signin({ email, password })
      }
    }
  }

  checkFields = type => {
    const {
      createAccount,
      email,
      password,
      firstName,
      lastName,
      missingEmail,
      missingFirstName,
      missingLastName,
      missingPassword
    } = this.state;
    (email.length === 0) && this.setState({ missingEmail: true });
    (password.length === 0) && this.setState({ missingPassword: true });
    (firstName.length === 0) && this.setState({ missingFirstName: true });
    (lastName.length === 0) && this.setState({ missingLastName: true });
    const requiredFields = !type ? (email.length === 0 && password.length === 0):(email.length === 0 && password.length === 0 && firstName.length === 0 && lastName.length === 0)
    console.log('email.length....', email.length)
    console.log('email.length === 0 ....', email.length === 0 )
    console.log('checking fildes returning ', requiredFields)
    if(requiredFields) return true;
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
      missingEmail,
      missingFirstName,
      missingLastName,
      missingPassword
    } = this.state;

    return(
          <div class="container has-text-centered">
            <div class="column is-8 is-offset-2">
              <div class="box" >
                  <h3 class="title has-text-grey">Login</h3>
                  <p class="subtitle has-text-grey">Please login to proceed.</p>
                  <hr/>
                    <div class="field">
                      <div class="control">
                        <input onChange={({ target }) => this.handleEmailChange(target.value)} value={email} class="input is-large" name="email" placeholder="Your Email" autofocus=""/>
                      </div>
                      { missingEmail && <p class="help is-danger">Email required</p> }
                    </div>
                      { createAccount && 
                      <div class="field">
                        <div class="control">
                          <input onChange={({ target }) => this.handleFirstNameChange(target.value)} value={firstName} class="input is-large" name="firstName" placeholder="First Name" autofocus=""/>
                        </div>
                        { missingFirstName && <p class="help is-danger">First name required</p> }
                      </div>}
                      { createAccount && 
                      <div class="field">
                        <div class="control">
                          <input onChange={({ target }) => this.handleLastNameChange(target.value)} value={lastName} class="input is-large" name="lastName" placeholder="Last Name" autofocus=""/>
                        </div>
                        { missingLastName && <p class="help is-danger">Last name required</p> }
                      </div>}
                      <div class="field">
                        <div class="control">
                          <input onChange={({ target }) => this.handlePasswordChange(target.value)} value={password} class="input is-large" name="password" placeholder="Your Password"/>
                        </div>
                        { missingPassword && <p class="help is-danger">Password required</p> }
                      </div>
                      <div class="field">
                      <div class="control has-text-centered">
                        <button onClick={() => this.onSubmit()} class="button centered is-block is-info is-medium" type="button">{ createAccount ? 'Create Account' : 'Log In' }</button>
                      </div>
                      </div>
                      { this.props.error &&
                      <div class="field">
                        <div class="button is-danger">{this.props.error}</div>
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

export default connect(({ auth }) => ({
  error: auth.error,
  user: auth.user
}),
{ signin, signup }
)(Login);