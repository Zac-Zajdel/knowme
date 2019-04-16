import React, { Component } from 'react';


class App extends Component {

  state = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    login: false
  }

  // State manipulation methods grabbed from form
  onUsernameChange = e => this.setState({ username: e.target.value });
  onFirstNameChange = e => this.setState({ firstName: e.target.value });
  onLastNameChange = e => this.setState({ lastName: e.target.value });
  onEmailChange = e => this.setState({ email: e.target.value });
  onPasswordChange = e => this.setState({ password: e.target.value });

  // Talks to the backend and logs user into system.
  onLoginSubmit = () => {
    fetch('http://localhost:3000/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }).then(response => response.text());
    this.setState({ login: true });
  }

  // Talks to the backend and inserts data from form to Atlas.
  onRegisterSubmit = () => {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: this.state.username,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      })
    }).then(response => response.text());
    this.setState({ login: true });
  }

  render() {
    return (
      <div>
        Hello
      </div>
    );
  }
}

export default App;
