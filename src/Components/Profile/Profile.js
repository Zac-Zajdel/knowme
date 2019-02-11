import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {

  render() {
    return (
      <div>
        {this.props.signIn}
        Profile Page</div>
    );
  }
}

export default Profile;