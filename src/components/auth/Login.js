import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';
import Auth from './Auth';

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
    active: 'tab1'
  }

  onClickTab = tab => this.setState({ active: tab})
  

  render(){
    
  
    return(
      <div> 
        <Hero isColor='info' isSize="1/3">
          <Navigation/>
          <Auth/>
        </Hero>
      </div>
    );
  }
}

export default Login; 