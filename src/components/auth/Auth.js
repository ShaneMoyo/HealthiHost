import React, { Component } from 'react';
import authApi from '../../services/authApi';

class Login extends Component {
  state = {
    createAccount: false
  }

  onSubmit = event => {
    event.preventDefault();
    const { elements } = event.target;
    const { createAccount } = this.state;
    const credentials = createAccount ? 
    { 
      email: elements['email'].value,
      password: elements['password'].value,
      firstName: elements['first name'].value,
      lastName: elements['last name'].value,
    } : 
    {
      email: elements['email'].value,
      password: elements['password'].value,
    };
    createAccount ? authApi.signUp(credentials) : authApi.signIn(credentials);

  }

  render(){
    const { createAccount } = this.state;
    return(
      
      
      <section class="hero  is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="column is-4 is-offset-4">
              <h3 class="title has-text-grey">Login</h3>
              <p class="subtitle has-text-grey">Please login to proceed.</p>
                  <div class="box">
                    <form onSubmit={ event => this.onSubmit(event)}>
                      <div class="field">
                        <div class="control">
                          <input class="input is-large" name="email" placeholder="Your Email" autofocus=""/>
                        </div>
                      </div>
                      { createAccount && <div class="field">
                        <div class="control">
                          <input class="input is-large" name="first name" placeholder="First Name" autofocus=""/>
                        </div>
                      </div>}
                      { createAccount && <div class="field">
                        <div class="control">
                          <input class="input is-large" name="last name" placeholder="Last Name" autofocus=""/>
                        </div>
                      </div>}
                      <div class="field">
                        <div class="control">
                          <input class="input is-large" name="password" placeholder="Your Password"/>
                        </div>
                      </div>
                      <div class="field">
                        <label class="checkbox">
                          <input type="checkbox"/>
                            Remember me
                        </label>
                      </div>
                      <button class="button is-block is-info is-large" type="submit">{ createAccount ? 'Create Account' : 'Log In' }</button>
                    </form>
                  </div>
                  <p class="has-text-grey">
                    <a class="button is-info is-small" onClick={() => this.setState({ createAccount: !createAccount })}>
                      { createAccount ? 'Log In' : 'Create an Account' }
                    </a>
                    &nbsp;·&nbsp;
                  </p>
                </div>
              </div>
            </div>
      </section>
      
    );
  }
}

export default Login;