import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../Layout/Layout';
import Profile from '../Profile/Profile';
import Messages from '../Messages/Messages';
import NewsFeed from '../NewsFeed/NewsFeed';
import Settings from '../Settings/Settings';
import HomePage from '../HomePage/HomePage';


// Show them how the pathways work during meet-up
// This will help explain to Cody

class Routes extends Component {

  // REMEMBER!!!
  // I will need to obtain from the database I am signed in by passing setState
  render() {

    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/profile' component={Profile} />
            <Route path='/messages' component={Messages} />
            <Route path='/newsfeed' component={NewsFeed} />
            <Route path='/settings' component={Settings} />
            <Route path='/' exact component={HomePage} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default Routes;