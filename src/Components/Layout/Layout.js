import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';

class Layout extends Component {

  state = {
    diplayNav: true
  }

  toggleNav = (action) => {
    this.setState = ({
      displayNav: action
    });
  }


  render() {
    return (
      <div>
        <Navigation
          showNav={this.state.displayNav}
          onHideDisplay={() => this.toogleNav(false)}
          onOpenNav={() => this.toogleNav(true)}
        />
        {this.props.children}
      </div>
    );
  }
}


export default Layout;