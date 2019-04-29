import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import ProfileActions from './ProfileActions';
import Experience from './Experience';
import Education from './Education';

class Dashboard extends Component {

  // We want this to get called immediately because the user shouldn't wait.
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick = e => {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;
    /*
      All of these checks are necessary because we have to see if the user needs
      to set up their initial profile the same way any other social media does.
    */
    if (profile === null || loading) {
      dashboardContent = <h1 className='text-center lead'>Loading your dashboard</h1>
    } else if (Object.keys(profile).length > 0) {
      dashboardContent = (
        <div>
          <p className="lead">Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link></p>
          <ProfileActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
          <div>
            <button onClick={this.onDeleteClick} className="btn btn-outline-danger">Delete Your Account</button>
          </div>
        </div>
      );
    } else {
      dashboardContent = (
        <div className='text-center mt-5'>
          <h1 className='p-3'>Welcome {user.name}</h1>
          <h1 className='p-3'>Thanks for joining KnowMe!</h1>
          <h1 className='p-3'>Lets get started!</h1>
          <Link to='/create-profile' className='btn btn-lg btn-info m-5'>Create Your Profile</Link>
        </div>
      )
    }

    return (
      <div className='dashboard' >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className='display-4'>Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
