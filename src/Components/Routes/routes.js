import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../Layout/Layout';
import Profile from '../Profile/Profile';
import MessageRoute from '../MessageRoute/MessageRoute';
import NewsFeed from '../NewsFeed/NewsFeed';
import Settings from '../Settings/Settings';

class Routes extends Component {

  // REMEMBER!!!
  // I will need to obtain from the database I am signed in by passing setState
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/profile' render={() => <Profile {...this.props} />} />
            <Route path='/messages' render={() => <MessageRoute {...this.props} />} />
            <Route path='/settings' component={Settings} />
            <Route path='/' component={NewsFeed} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default Routes;