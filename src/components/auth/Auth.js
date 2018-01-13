import React, { Component } from 'react';
import { signin, signup } from './actions';
import { connect } from 'react-redux';


class Login extends Component {
  state = {
    createAccount: false,
    missingInput: {
      password: false,
      email: false,
      firstName: false,
      lastName: false
    }
  }

  onSubmit = event => {
    console.log('triggered.........................')
    console.log('triggered.........................')
    console.log('triggered.........................')
    event.preventDefault();
    const { email, password, firstName, lastName } = event.target.elements
    const { createAccount } = this.state;
    const { signup, signin } = this.props;
    const missingInput = 
      { 
        email: !!email.value,
        password: !!password.value,
        firstName: !!firstName.value,
        lastName: !!lastName.value
      };
      if(createAccount) {
        if(!email.value || !password.value || !lastName.value || !firstName.value) {
          return this.setState({ missingInput });
        } else {
        const isTrue = (!email.value || !password.value || !lastName.value || !firstName.value);
        console.log('sign up isTrue filled out', isTrue)
        const credentials = { 
            email: email.value,
            password: password.value,
            firstName: firstName.value,
            lastName: lastName.value,
            roles: ['client']
          };
        signup(credentials);
        }
      } else {
        if(email || password) {
          return this.setState({ missingInput });
        } else {
        const isTrue = (email || password);
        console.log('login filled out', isTrue)
        const credentials = { 
          email: email.value,
          password: password.value,
          };
        signin(credentials);
        }
      }
  }

  render(){
    const { createAccount, missingInput } = this.state;
    return(
          <div class="container has-text-centered">
            <div class="column is-8 is-offset-2">
              <div class="box" >
                <form onSubmit={ event => this.onSubmit(event)}>
                  <h3 class="title has-text-grey">Login</h3>
                  <p class="subtitle has-text-grey">Please login to proceed.</p>
                  <hr/>
                    <div class="field">
                      <div class="control">
                        <input class="input is-large" name="email" placeholder="Your Email" autofocus=""/>
                      </div>
                      { missingInput.email && <p class="help is-danger">Email required</p> }
                    </div>
                      { createAccount && 
                      <div class="field">
                        <div class="control">
                          <input class="input is-large" name="firstName" placeholder="First Name" autofocus=""/>
                        </div>
                        { missingInput.firstName && <p class="help is-danger">First name required</p> }
                      </div>}
                      { createAccount && 
                      <div class="field">
                        <div class="control">
                          <input class="input is-large" name="lastName" placeholder="Last Name" autofocus=""/>
                        </div>
                        { missingInput.lastName && <p class="help is-danger">Last name required</p> }
                      </div>}
                      <div class="field">
                        <div class="control">
                          <input class="input is-large" name="password" placeholder="Your Password"/>
                        </div>
                        { missingInput.password && <p class="help is-danger">Password required</p> }
                      </div>
                      <div class="field">
                      <div class="control has-text-centered">
                        <button class="button centered is-block is-info is-medium" type="submit">{ createAccount ? 'Create Account' : 'Log In' }</button>
                      </div>
                      </div>
                    </form>
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