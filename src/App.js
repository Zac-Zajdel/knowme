import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthHeader from './utils/setAuthHeader';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/Footer';
import Landing from './Components/layout/Landing';
import Register from './Components/auth/Register';
import Login from './Components/auth/Login';
import Dashboard from './Components/layout/Dashboard';
import AuthenticatedRoute from './Components/common/AuthenticatedRoute';
import ProfileCreation from './Components/layout/ProfileCreation';

/*
  In the root app, we must check for the token to exists
  and if that is true we must set the auth headers.
  We then decode the token to get the data and then set the current
  user insider the store.
  Finally, we have to check if the token has expired to automatically
  take the user back to the login page cause their data gets corrupted.
*/
if (localStorage.jwtToken) {
  setAuthHeader(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    store.dispatch(clearCurrentProfile());
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='App'>
            <Navbar />
            <Route exact path='/' component={Landing} />
            <div className="container">
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              {/* Switch allows us to redirect back */}
              <Switch>
                <AuthenticatedRoute exact path='/dashboard' component={Dashboard} />
              </Switch>
              <Switch>
                <ProfileCreation exact path='/create-profile' component={ProfileCreation} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
