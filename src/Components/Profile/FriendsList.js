import React, { Component } from 'react';

const friends = [
  {
    photo: 'photo: ',
    name: 'Zac'
  },
  {
    photo: 'photo: ',
    name: 'Alaina'
  },
  {
    photo: 'photo: ',
    name: 'Cody'
  },
  {
    photo: 'photo: ',
    name: 'Chad'
  },
  {
    photo: 'photo: ',
    name: 'Dr. Ghani'
  }
]


class FriendsList extends Component {

  render() {
    return (
      <div className='friends-list'>
        <h5>Friends:</h5>
        {friends.map((friends, i) => {
          return (
            <div key={i}>
              <div className='photo'>
                {friends.photo}
              </div>
              <div className='name'>
                {friends.name}
              </div>
            </div>
          );
        })
        }
      </div>
    );
  }
}

export default FriendsList;