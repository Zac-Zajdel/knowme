import React, { Component } from 'react';
import profilePic from '../MessageRoute/Components/download.png';

class ProfileHeader extends Component {
  render() {
    return (
      <div className='profile-header'>
        <img src={profilePic} alt='profile' />
        <div className='username'>Cody Pytash</div>
        <div className='joined'>Joined: 02/12/19</div>
      </div>
    );
  }
}

export default ProfileHeader;