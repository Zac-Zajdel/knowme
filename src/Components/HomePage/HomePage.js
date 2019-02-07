import React, { Component } from 'react';

import GhanMan from '../HomePage/Ghani.jpg';

class HomePage extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',

  }

  /* Change what is displayed with if statements in render and changing the state/route
     if the user clicks a button (onClick) and goes to just signin rather than need to register.
     This page will be the initial page the user goes to so we need to make sure of that.
  */

  // State manipulation methods grabbed from form
  onFirstNameChange = e => this.setState({ name: e.target.value });
  onLastNameChange = e => this.setState({ lastName: e.target.value });
  onEmailChange = e => this.setState({ email: e.target.value });
  onPasswordChange = e => this.setState({ password: e.target.value });


  render() {
    return (
      <article>
        <main>
          <fieldset>
            <legend>Register</legend>
            <div>
              <label>First Name: </label>
              <input
                type='text'
                placeholder=' First name'
                name='firstName'
                onChange={this.onFirstNameChange}
              />
            </div>
            <div>
              <label>Last Name: </label>
              <input
                type='text'
                placeholder=' Last name'
                name='lastName'
                onChange={this.onLastNameChange}
              />
            </div>
            <div>
              <label>Email: </label>
              <input
                type='text'
                placeholder=' Email'
                name='email'
                onChange={this.onEmailChange}
              />
            </div>
            <div>
              <label>Password: </label>
              <input
                type='text'
                placeholder=' Password'
                name='password'
                onChange={this.onPasswordChange}
              />
            </div>
          </fieldset>
          <div>
            <input
              type='submit'
              value='Sign Up'
              onClick={this.onRegister}
            />
            <img src={GhanMan} alt="The OG" />
          </div>
        </main>
      </article >
    );
  }
}

export default HomePage;