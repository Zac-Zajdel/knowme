import React, { Component } from 'react';

import Navigation from '../Navigation/Navigation';
import './layout.css';


class Layout extends Component {

  state = {
    diplayNav: false
  }

  toggleNav = (action) => {
    this.setState({
      displayNav: action
    })
  }


  render() {
    return (
      <div>
        <Navigation
          showNav={this.state.displayNav}
          onHideNav={() => this.toggleNav(false)}
          onOpenNav={() => this.toggleNav(true)}
        />
        {this.props.children}
      </div>
    );
  }
}


export default Layout;