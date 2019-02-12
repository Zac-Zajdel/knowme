import React, { Component } from 'react';
import NewsFeedItems from './NewsFeedItems';

//Get data from database
class NewsFeed extends Component {
  render() {
    return (
      <NewsFeedItems />
    );
  }
}

export default NewsFeed;