import React, { Component } from 'react';

class NewRoomForm extends Component {

  state = {
    roomName: ''
  }

  onInputChange = e => this.setState({ roomName: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.createRoom(this.state.roomName);
    this.setState({ roomName: '' });
  }

  render() {
    return (
      <div className='new-room-form'>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            onChange={this.onInputChange}
            value={this.state.roomName}
            placeholder='Create Room..'
            required
          />
          <button className='create-room-btn' type='submit'>+</button>
        </form>
      </div>
    );
  }
}

export default NewRoomForm;