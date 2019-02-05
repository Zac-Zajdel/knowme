import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home/Home';
import Layout from '../Layout/Layout';
import NewsFeed from '../NewsFeed/NewsFeed';

// Show them how the pathways work during meet-up
// This will help explain to Cody

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/newsfeed' component={NewsFeed} />
          <Route path='/' exact component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;