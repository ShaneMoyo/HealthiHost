import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const NavBarLink = props => <NavLink {...props} 
className="nav-link" 
activeClassName="active"
/>;

class Promo extends Component {

  render(){
    return(
      <section class="hero is-success is-bold is-small promo-block">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Lorem dolor sed viverra
            </h1>
            <h2 class="subtitle">
              Consequat id porta nibh venenatis cras sed felis eget
            </h2>
            <div class="field">
            <a class="button is-white is-outlined">
              <NavBarLink exact to="/appointment">Book Appointment</NavBarLink>
            </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Promo;