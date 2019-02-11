import React, { Component } from 'react';
import Default from './download.png';

class RoomList extends Component {
  // Will need to get data from the database instead of hardcoding the user data.
  render() {
    const orderedMessages = [...this.props.rooms].sort((a, b) => a.id - b.id);
    return (
      <div className='room-list'>
        <ul>
          {orderedMessages.map(room => {
            const active = this.props.roomId === room.id ? 'active' : '';
            return (
              <li key={room.id} className={`room${active}`}>
                <img className='user-photo' src={Default} alt='text' />
                Ghani:
                <a
                  onClick={() => { this.props.subscribeToRoom(room.id) }}
                  href='#/'> {room.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default RoomList;