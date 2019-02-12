import React, { Component } from 'react';

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

class ProfilePosts extends Component {
  render() {
    return (
      <div className='profile-posts'>
        {fakePost.map((items, i) => {
          return (
            <div key={i} className="card text-center">
              <div className="card-header">
                {items.name}
              </div>
              <div className="card-body">
                <p className="card-text">{items.status}</p>
                <a href="/#" className="btn btn-primary">Go somewhere</a>
              </div>
              <div className="card-footer text-muted">
                {items.timestamp}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProfilePosts;