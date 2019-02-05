import React from 'react';
import style from './NewsFeed.module.css';

const NewsFeed = () => {
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