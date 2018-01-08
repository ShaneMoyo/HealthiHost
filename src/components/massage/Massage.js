import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';
import Promo from '../article/Promo';
import Article from '../article/Article';
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
      tab1: (<Box><Promo/><Article/><Promo/><Article/><Promo/><Promo/><Article/></Box>),
      tab2: (<Box><Form/></Box>),
      tab3: (<Box><Card/><Card/></Box>)
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
            <Tabs isBoxed isFullWidth>
              <Container>
                <TabList>
                    <Tab isActive={'tab1' === this.state.active } onClick={() => this.onClickTab('tab1')}><TabLink>Overview</TabLink></Tab>
                    <Tab isActive={'tab2' === this.state.active } onClick={() => this.onClickTab('tab2')}><TabLink>Book Appointment</TabLink></Tab>
                    <Tab isActive={'tab3' === this.state.active } onClick={() => this.onClickTab('tab3')}><TabLink>About</TabLink></Tab>
                </TabList>
              </Container>
            </Tabs>
          </HeroFooter>
        </Hero>
        {tabViews[this.state.active]}
      </div>
    );
  }
}

export default Massage; 