import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../Layout/Layout';
import Profile from '../Profile/Profile';
import Messages from '../Messages/Messages';
import NewsFeed from '../NewsFeed/NewsFeed';
import Settings from '../Settings/Settings';
import SignIn from '../SignIn/SignIn';
import HomePage from '../HomePage/HomePage';

// Show them how the pathways work during meet-up
// This will help explain to Cody

class Routes extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/profile' component={Profile} />
            <Route path='/messages' component={Messages} />
            <Route path='/newsfeed' component={NewsFeed} />
            <Route path='/settings' component={Settings} />
            <Route path='/signIn' component={SignIn} />
          </Switch>
        </Layout>
        <Switch>
          <Route path='/' exact component={HomePage} />
        </Switch>
      </div>


    );
  }
}

export default Routes;