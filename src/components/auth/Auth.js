import React, { Component } from 'react';
import { signin, signup } from './actions';
import { connect } from 'react-redux';
import { 
  Box,
  Hero,
  HeroHeader,
  Nav,
  NavItem,
  NavLeft,
  NavRight,
  NavCenter,
  Icon,
  HeroBody,
  Container,
  Title,
  HeroFooter,
  Tabs,
  TabList,
  Tab,
  TabLink
 } from 'bloomer';

class Login extends Component {
  state = {
    createAccount: false
  }

  onSubmit = event => {
    console.log('triggered.........................')
    console.log('triggered.........................')
    console.log('triggered.........................')
    event.preventDefault();
    const { elements } = event.target;
    const { createAccount } = this.state;
    const { signup, signin } = this.props;
    const credentials = createAccount ? 
    { 
      email: elements['email'].value,
      password: elements['password'].value,
      firstName: elements['first name'].value,
      lastName: elements['last name'].value,
      roles: ['client']
    } : 
    {
      email: elements['email'].value,
      password: elements['password'].value,
    };

    if(createAccount) return signup(credentials);
    signin(credentials);

  }

  render(){
    const { createAccount } = this.state;
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
                    </div>
                      { createAccount && 
                      <div class="field">
                        <div class="control">
                          <input class="input is-large" name="first name" placeholder="First Name" autofocus=""/>
                        </div>
                      </div>}
                      { createAccount && 
                      <div class="field">
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