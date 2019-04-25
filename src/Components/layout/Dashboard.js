import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getCurrentProfile } from '../../actions/profileActions';

class Dashboard extends Component {

  // We want this to get called immediately because the user shouldn't wait.
  componentDidMount() {
    this.props.getCurrentProfile();
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
      dashboardContent = <h1>Loading your dashboard</h1>
    } else if (Object.keys(profile).length > 0) {
      dashboardContent = <h1>DISPLAY PROFILE</h1>
    } else {
      dashboardContent = (
        <div>
          <h2 className="lead">Welcome {user.name}</h2>
          <p>Your profile appears to be empty?</p>
          <Link to='/create-profile' className='btn btn-lg btn-info'>Create Your Profile</Link>
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

Dashboard.PropTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
