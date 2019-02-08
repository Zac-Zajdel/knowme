import React, { Component } from 'react';
import './HomePage.css';
import Productivity from './productivity.jpg';

class HomePage extends Component {

  state = {
    username: '',
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
    console.log('clicked');
  }

  onRegisterSubmit = () => {
    console.log('clicked');
  }


  render() {
    return (
      <div className='registration'>
        <nav className="navbar navbar-light bg-light">
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
            <button onClick={this.onLoginSubmit} className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Login</button>
          </form>
        </nav>
        <header className='p-5' id='sign-in'>
          <div className='dark-overlay'>
            <div className='home-inner container'>
              <div className='row'>
                <div className='col-lg-8 d-none d-lg-block'>
                  <h1 className='display-2'>KnowMe</h1>
                  <div className='d-flex'>
                    <div className='lead p-4 algin-self-front'>
                      KnowMe provides a rich, intelligent, adventurous community of users all around the world that
                      come together to share the path life has lead them to.
                    </div>
                  </div>
                  <div className='d-flex'>
                    <div className='lead p-4 algin-self-front'>
                      From uploading photos of your recent trip to communicating with your friends through instant messaging and comments,
                      the possibilities are endless as KnowMe is continuing to expand and offer several features.
                    </div>
                  </div>
                  <div className='d-flex'>
                    <div className='lead p-4 algin-self-front'>
                      Our rich user-interface provides a streamlined experienced saving you precious time and getting you to your destination
                      in no time. Check out the possibilities and let your friends get to know the real you.
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='card bg-dark card-form'>
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
                          onClick={this.onRegisterSubmit}
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
        <section id="create-section" className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 order-2">
                <img src={Productivity} alt="teamwork" className="pt-2 img-fluid mb-3 mt-3 ml-3 rounded-circle" />
              </div>
              <div className="col-md-6 order-1">
                <h3 className="ml-4 mb-4 display-4">Get More Done</h3>
                <p className="ml-4 lead">At KnowMe, we strive to provide a business friendly application
                with easy access to sharing information with your co-workers by:</p>
                <div className="d-flex">
                  <div className="p-4">
                    Private room communication for projects.
                  </div>
                </div>
                <div className="d-flex">
                  <div className="p-4">
                    Centralized Location to share ideas and become inspired.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="main-footer bg-dark">
          <div className="container">
            <div className="row">
              <div className="py-4 col text-center">
                <h4>KnowMe Social Networking</h4>
                <p>Copyright &copy; 2019</p>
              </div>
            </div>
          </div>
        </footer>

      </div>
    );
  }
}

export default HomePage;