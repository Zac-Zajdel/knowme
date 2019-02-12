import React from 'react';
import style from './NewsFeed.module.css';
// import SearchBar from '../Search/SearchBar';
// import PostsList from '../Posts/PostsList';

const NewsFeed = () => {

  const fakePost = [
    {
      name: 'Alaina',
      photo: '',
      status: 'I made this post. yayyyyy',
      timestamp: 'fake time'
    },
    {
      name: 'Brad',
      photo: '',
      status: `Yo that isn't my name?`,
      timestamp: 'fake time'
    },
    {
      name: 'Cody',
      photo: '',
      status: 'Shut up brad.',
      timestamp: 'fake time'
    },
    {
      name: 'Zac',
      photo: '',
      status: `Dr. Ghani is my favorite teacher......`,
      timestamp: 'fake time'
    }
  ];
  // <SearchBar />
  // <PostsList />

  const showPosts = () => {
    return fakePost.map((items, i) => {
      return (
        <div className={style.newsFeed} key={i}>
          <div className={style.userName}>
            {items.name}
          </div>
          <div className={style.status}>
            {items.status}
          </div>
        </div>
      );
    })
  }


  return (
    <>
      {showPosts()}
    </>
  );
}

export default NewsFeed;