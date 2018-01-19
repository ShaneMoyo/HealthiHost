import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';
import Promo from './Promo';
import Article from './Article';
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

class Massage extends Component { 

  state = { 
    active: 'tab1'
  }

  onClickTab = tab => this.setState({ active: tab})
  

  render(){
    let tabView;

    const tabViews = { 
      tab1: (<Box></Box>),
      tab2: (<Box></Box>),
      tab3: (<Box></Box>)
    };
  
    return(
      <div> 
        <Hero isColor='info' isSize='medium'>
          <Navigation/>
          <HeroBody>
            <Container hasTextAlign='centered'>
              <Title>Massage Therapy</Title>
            </Container>
          </HeroBody>
          <HeroFooter>
            <div class="animated fadeIn">
          <Container class="animated shake" hasTextAlign='centered'>
          <Promo/>
          <Article/>
          <Promo/>
          <Article/>
          <Promo/>
          </Container> 
          </div>
          </HeroFooter>
        </Hero>
        {tabViews[this.state.active]}
      </div>
    );
  }
}

export default Massage; 