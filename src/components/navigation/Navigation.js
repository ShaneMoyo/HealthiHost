import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../style/mystyle.css';

const NavBarLink = props => <NavLink {...props} 
className="nav-link" 
activeClassName="active"
/>;

class Navigation extends Component {

  state = {
    isActive: false
  }

  onClickNav = () => {
    this.setState({ isActive: !this.state.isActive})
  }

  render() {
    const { user } = this.props;
    return (
      <div class="hero-head">
      <nav class="navbar">
      <div class="container is-fluid">
        <div class="navbar-brand">
          <a class="navbar-item">
            <NavBarLink exact to="/">HealthiHost</NavBarLink>
          </a>
        

          <span class="navbar-burger burger" data-target="navbarMenu" onClick={() => this.onClickNav()}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>

        <div class={ this.state.isActive ? "navbar-menu is-active" : "navbar-menu"}>
          <div class="navbar-end">
            <a class="navbar-item is-transparent">
              { user ? `Hello, ${user.firstName}`: <NavBarLink exact to="/login">Sign In / Sign Up</NavBarLink>}
            </a>
            <a class="navbar-item is-transparent">
              <NavBarLink exact to="/massage">Massage</NavBarLink>
            </a>
            <a class="navbar-item">
              <NavBarLink exact to="/minerals">Minerals</NavBarLink>
            </a>
            <a class="navbar-item">
            <NavBarLink exact to="/movement">Movement</NavBarLink>
            </a>
          </div>
        </div>

      </div>
     </nav>
     
     </div>
    );
  }
}

export default connect(({ auth }) => ({
  error: auth.error,
  user: auth.user
})
)(Navigation);
