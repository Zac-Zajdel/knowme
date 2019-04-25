import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/*
  Sets up a private route where if the user has been authenticated then they
  will be able to continue but if not they will get redirected to /login.
*/
const AuthenticatedRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props => auth.isAuthenticated === true ?
      (<Component {...props} />) :
      (<Redirect to='/login' />)
    }
  />
);

AuthenticatedRoute.PropTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(AuthenticatedRoute);
