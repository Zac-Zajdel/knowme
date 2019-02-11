import React, { Component } from 'react';

class SendMessage extends Component {

  state = {
    message: ''
  }

  onInputChange = e => this.setState({ message: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.sendMessage(this.state.message, this.props.roomId);
    this.setState({
      message: ''
    });
  }

  render() {
    return (
      <form
        className='send-message'
        onSubmit={this.handleSubmit}
      >
        <input
          disabled={this.props.disabled}
          type='text'
          value={this.state.message}
          onChange={this.onInputChange}
          placeholder='Type your Message..'
        />
      </form>
    );
  }
}

export default SendMessage;