import React from 'react';
import style from './NewsFeed.module.css';
// import SearchBar from '../Search/SearchBar';
// import PostsList from '../Posts/PostsList';

const NewsFeed = () => {
  // <SearchBar />
  // <PostsList />
  return (
    <div className={style.newsFeed}>
      Profile photo followed by name
      <p>Post</p>
      <p>Like or dislike</p>
      <p>Comments</p>
    </div>
  );
}

export default NewsFeed;