// import React, { Component } from 'react';
// import './HomePage.css';
// import Productivity from './Images/productivity.jpg';
// import Security from './Images/security.jpg';

// class HomePage extends Component {

//   state = {
//     username: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//   }

//   // State manipulation methods grabbed from form
//   onUsernameChange = e => this.setState({ username: e.target.value });
//   onFirstNameChange = e => this.setState({ firstName: e.target.value });
//   onLastNameChange = e => this.setState({ lastName: e.target.value });
//   onEmailChange = e => this.setState({ email: e.target.value });
//   onPasswordChange = e => this.setState({ password: e.target.value });

//   // This will interact with the database.
//   onLoginSubmit = () => {
//     console.log('clicked');
//   }

//   // Talks to the backend and inserts data from form to Atlas.
//   onRegisterSubmit = () => {
//     fetch('http://localhost:3001/register', {
//       method: 'post',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         username: this.state.username,
//         firstName: this.state.firstName,
//         lastName: this.state.lastName,
//         email: this.state.email,
//         password: this.state.password
//       })
//     }).then(response => response.json());
//   }

//   render() {
//     return (
//       <div className='registration'>
//         {/* Login Section */}
//         <nav id='nav-background' className="navbar navbar-light">
//           <h5 id='login-form'>Login</h5>
//           <form className="form-inline">
//             <input
//               onChange={this.onUsernameChange}
//               className="form-control mr-sm-2"
//               type="search"
//               name="username"
//               placeholder="Username" />
//             <input
//               onChange={this.onPasswordChange}
//               className="form-control mr-sm-2"
//               type="search"
//               name="password"
//               placeholder="Password" />
//             <button onClick={this.onLoginSubmit} className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Login</button>
//           </form>
//         </nav>
//         {/* Basic Information Section */}
//         <header className='p-5' id='sign-in'>
//           <div className='dark-overlay'>
//             <div className='home-inner container'>
//               <div className='row'>
//                 <div className='col-lg-8 d-none d-lg-block'>
//                   <h1 className='display-2'>KnowMe</h1>
//                   <div className='d-flex'>
//                     <div className='lead p-4 algin-self-front'>
//                       KnowMe provides a rich, intelligent, adventurous community of users all around the world that
//                       come together to share the path life has lead them to.
//                     </div>
//                   </div>
//                   <div className='d-flex'>
//                     <div className='lead p-4 algin-self-front'>
//                       From uploading photos of your recent trip to communicating with your friends through instant messaging and comments,
//                       the possibilities are endless as KnowMe is continuing to expand and offer several features.
//                     </div>
//                   </div>
//                   <div className='d-flex'>
//                     <div className='lead p-4 algin-self-front'>
//                       Our rich user-interface provides a streamlined experienced saving you precious time and getting you to your destination
//                       in no time. Check out the possibilities and let your friends get to know the real you.
//                     </div>
//                   </div>
//                 </div>
//                 {/* Register Section */}
//                 <div className='col-lg-4'>
//                   <div className='card bg-dark card-form'>
//                     <div className='card-body'>
//                       <h3 className='text-center pb-3 text-light'>Register</h3>
//                       <form method='POST'>
//                         <div className='form-group'>
//                           <input
//                             onChange={this.onUsernameChange}
//                             type='text'
//                             className='form-control form-control-lg'
//                             name="username"
//                             placeholder='Username'
//                           />
//                         </div>
//                         <div className='form-group'>
//                           <input
//                             onChange={this.onFirstNameChange}
//                             type='text'
//                             className='form-control form-control-lg'
//                             name="firstName"
//                             placeholder='First name'
//                           />
//                         </div>
//                         <div className='form-group'>
//                           <input
//                             onChange={this.onLastNameChange}
//                             type='text'
//                             className='form-control form-control-lg'
//                             name="lastName"
//                             placeholder='Last name'
//                           />
//                         </div>
//                         <div className='form-group'>
//                           <input
//                             onChange={this.onEmailChange}
//                             type='text'
//                             className='form-control form-control-lg'
//                             name="email"
//                             placeholder='Email'
//                           />
//                         </div>
//                         <div className='form-group'>
//                           <input
//                             onChange={this.onPasswordChange}
//                             type='password'
//                             className='form-control form-control-lg'
//                             name="password"
//                             placeholder='Password'
//                           />
//                         </div>
//                         <input
//                           onClick={this.onRegisterSubmit}
//                           type='submit'
//                           className='btn btn-outline-light btn-block'
//                           value='Sign Up'
//                         />
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>
//         {/* Productivity Section */}
//         <section id="create-section" className="py-5">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-6 order-2">
//                 <img src={Productivity} alt="teamwork" className="pt-2 img-fluid mb-3 mt-3 ml-3 rounded-circle" />
//               </div>
//               <div className="col-md-6 order-1">
//                 <h3 className="ml-4 mb-4 display-4">Get More Done</h3>
//                 <p className="ml-4 lead">At KnowMe, we strive to provide a business friendly application
//                 with easy access to sharing information with your co-workers by:</p>
//                 <div className="d-flex">
//                   <div className="p-4">
//                     Private room communication for projects.
//                   </div>
//                 </div>
//                 <div className="d-flex">
//                   <div className="p-4">
//                     Centralized Location to share ideas and become inspired.
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Security Information Section */}
//         <section id="security" className="py-5">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-6">
//                 <img src={Security} alt="" className="pt-2 img-fluid mb-3 rounded-circle" />
//               </div>
//               <div className="col-md-6">
//                 <h3 className="mt-4 ml-4 mb-4 display-4">Secure and Safe</h3>
//                 <p className=" ml-4 ml-4 lead">At KnowMe, you can rest assured that your data will be stored using advanced technology and
//                 will not be sold to 3rd parties. We use the following to help keep your data safe:</p>
//                 <div className="d-flex">
//                   <div className=" ml-4 p-4 align-self-end">
//                     Extensive encryption to protect your files and login.
//                   </div>
//                 </div>
//                 <div className="d-flex">
//                   <div className="ml-4 p-4 align-self-end">
//                     Manage privacy settings so you know who can access your data.
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Footer Section */}
//         <footer className="main-footer bg-dark">
//           <div className="container">
//             <div className="row">
//               <div className="py-4 col text-center">
//                 <h4>KnowMe Social Networking</h4>
//                 <p>Copyright &copy; 2019</p>
//               </div>
//             </div>
//           </div>
//         </footer>
//       </div>
//     );
//   }
// }

// export default HomePage;