import React, { Component } from 'react';
import RoomList from './Components/RoomList';
import MessageList from './Components/MessageList';
import NewRoomForm from './Components/NewRoomForm';
import SendMessage from './Components/SendMessage';
import SearchBar from './Components/SearchBar';
import Info from './Components/Info';
import './MessageRoute.css';

import Chatkit from '@pusher/chatkit-client';
import { instanceLocator, tokenUrl } from '../../config';

class MessageRoute extends Component {

  state = {
    joinableRooms: [],
    joinedRooms: [],
    roomId: null,
    messages: []
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'Zac',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    })

    chatManager.connect()
      .then(currentUser => {
        this.currentUser = currentUser;
        console.log('Successfully connected:', currentUser);
        this.getRooms();
      })
      .catch(error => console.log('Error connecting to API:', error));
  }

  getRooms = () => {
    this.currentUser.getJoinableRooms()
      .then(joinableRooms => {
        this.setState({
          joinableRooms,
          joinedRooms: this.currentUser.rooms
        })
      })
      .catch(error => console.log('Error on joining rooms: ', error));
  }

  subscribeToRoom = roomId => {
    this.setState({ messages: [] });
    this.currentUser.subscribeToRoom({
      roomId: roomId,
      hooks: {
        onMessage: message => {
          console.log(`Recieved new Message: ${message.text}`);
          this.setState({
            messages: [...this.state.messages, message]
          })
        }
      }
    })
      .then(room => {
        this.setState({ roomId: room.id });
        this.getRooms()
      })
      .catch(error => console.log(`Error subscribing to room: ${error}`));
  }

  createRoom = (name) => {
    this.currentUser.createRoom({
      name
    })
      .then(room => this.subscribeToRoom(room.id))
      .catch(error => console.log(`Error with room: ${error}`));
  }

  sendMessage = (text, roomId) => {
    this.currentUser.sendMessage({
      text,
      roomId: roomId
    });
  }

  render() {
    return (
      <div className='message-page'>
        <Info />
        <RoomList
          roomId={this.state.roomId}
          rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
          subscribeToRoom={this.subscribeToRoom}
        />
        <SearchBar />
        <NewRoomForm createRoom={this.createRoom} />
        <SendMessage
          disabled={!this.state.roomId}
          roomId={this.state.roomId}
          sendMessage={this.sendMessage}
        />
        <MessageList roomId={this.state.roomId} messages={this.state.messages} />
      </div>
    );
  }
}

export default MessageRoute;