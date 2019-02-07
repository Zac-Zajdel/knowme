import React, { Component } from 'react';
import './HomePage.css';

class HomePage extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',

  }

  // State manipulation methods grabbed from form
  onUsernameChange = e => this.setState({ username: e.target.value });
  onFirstNameChange = e => this.setState({ name: e.target.value });
  onLastNameChange = e => this.setState({ lastName: e.target.value });
  onEmailChange = e => this.setState({ email: e.target.value });
  onPasswordChange = e => this.setState({ password: e.target.value });

  // This will interact with the database.
  onLoginSubmit = () => {

  }

  onRegisterSubmit = () => {

  }


  render() {
    return (
      <>
        <nav className="navbar navbar-light bg-light justify-content-between">
          <a href='/' className="navbar-brand">KnowMe</a>
          <form className="form-inline">
            <input
              onChange={this.onUsernameChange}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Username" />
            <input
              onChange={this.onPasswordChange}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Password" />
            <button onChange={this.onLoginSubmit} className="btn btn-outline-primary my-2 my-sm-0" type="submit">Login</button>
          </form>
        </nav>
        <header id='sign-in'>
          <div className='dark-overlay'>
            <div className='home-inner container'>
              <div className='row'>
                <div className='col-lg-8 d-none d-lg-block'>
                  <h1 className='display-2'>KnowMe</h1>
                  <div className='d-flex'>
                    <div className=' p-4 algin-self-front'>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat sit eligendi rerum dolores aliquid perferendis earum deserunt culpa repellat. Repellendus quas saepe nisi deserunt maxime cum adipisci sunt fuga quidem.
                    </div>
                  </div>
                  <div className='d-flex'>
                    <div className=' p-4 algin-self-front'>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat sit eligendi rerum dolores aliquid perferendis earum deserunt culpa repellat. Repellendus quas saepe nisi deserunt maxime cum adipisci sunt fuga quidem.
                    </div>
                  </div>
                  <div className='d-flex'>
                    <div className=' p-4 algin-self-front'>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat sit eligendi rerum dolores aliquid perferendis earum deserunt culpa repellat. Repellendus quas saepe nisi deserunt maxime cum adipisci sunt fuga quidem.
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='card bg-primary card-form'>
                    <div className='card-body'>
                      <h3 className='text-center pb-3 text-light'>Register</h3>
                      <form>
                        <div className='form-group'>
                          <input
                            onChange={this.onUsernameChange}
                            type='text'
                            className='form-control form-control-lg'
                            placeholder='Username'
                          />
                        </div>
                        <div className='form-group'>
                          <input
                            onChange={this.onFirstNameChange}
                            type='text'
                            className='form-control form-control-lg'
                            placeholder='First name'
                          />
                        </div>
                        <div className='form-group'>
                          <input
                            onChange={this.onLastNameChange}
                            type='text'
                            className='form-control form-control-lg'
                            placeholder='Last name'
                          />
                        </div>
                        <div className='form-group'>
                          <input
                            onChange={this.onEmailChange}
                            type='text'
                            className='form-control form-control-lg'
                            placeholder='Email'
                          />
                        </div>
                        <div className='form-group'>
                          <input
                            onChange={this.onPasswordChange}
                            type='text'
                            className='form-control form-control-lg'
                            placeholder='Password'
                          />
                        </div>
                        <input
                          onChange={this.onRegisterSubmit}
                          type='submit'
                          className='btn btn-outline-light btn-block'
                          value='Sign Up'
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default HomePage;