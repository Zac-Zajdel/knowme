import React, { Component } from 'react';
import './Profile.css';
import ProfileHeader from './ProfileHeader';
import FriendsList from './FriendsList';
import ProfilePosts from './ProfilePosts';
import ProfileSearchBar from './ProfileSearchBar';
import ProfileInfo from './ProfileInfo';

class Profile extends Component {

  render() {
    console.log('The username is:' + this.props.username);
    return (
      <div className='app'>
        <ProfileHeader {...this.props} />
        <ProfileInfo />
        <ProfileSearchBar />
        <FriendsList />
        <ProfilePosts />
      </div>
    );
  }
}

export default Profile;