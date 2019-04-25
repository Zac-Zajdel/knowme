import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TextField from '../common/TextField';
import { createUserProfile } from '../../actions/profileActions';
import { withRouter } from 'react-router-dom';

class CreateProfile extends Component {

  state = {
    displaySocialInputs: '',
    handle: '',
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
    errors: {}
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    }

    this.props.createUserProfile(profileData, this.props.history);
  }

  render() {
    const { errors, displaySocialInputs } = this.state;
    let inputs;
    if (displaySocialInputs) {
      inputs = (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fab fa-twitter"></i></span>
            </div>
            <input
              type="text"
              className={classnames('form-control form-control-lg', {
                'is-invalid': errors.name
              })}
              placeholder="Twitter URL"
              name="twitter"
              value={this.state.twitter}
              onChange={this.onChange}
            />
            {errors.twitter && (<div className='invalid-feedback'>{errors.twitter}</div>)}
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fab fa-facebook"></i></span>
            </div>
            <input
              type="text"
              className={classnames('form-control form-control-lg', {
                'is-invalid': errors.name
              })}
              placeholder="Facebook URL"
              name="facebook"
              value={this.state.facebook}
              onChange={this.onChange}
            />
            {errors.facebook && (<div className='invalid-feedback'>{errors.facebook}</div>)}
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fab fa-linkedin"></i></span>
            </div>
            <input
              type="text"
              className={classnames('form-control form-control-lg', {
                'is-invalid': errors.name
              })}
              placeholder="Linkedin URL"
              name="linkedin"
              value={this.state.linkedin}
              onChange={this.onChange}
            />
            {errors.linkedin && (<div className='invalid-feedback'>{errors.linkedin}</div>)}
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fab fa-youtube"></i></span>
            </div>
            <input
              type="text"
              className={classnames('form-control form-control-lg', {
                'is-invalid': errors.name
              })}
              placeholder="YouTube URL"
              name="youtube"
              value={this.state.youtube}
              onChange={this.onChange}
            />
            {errors.youtube && (<div className='invalid-feedback'>{errors.youtube}</div>)}
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fab fa-instagram"></i></span>
            </div>
            <input
              type="text"
              className={classnames('form-control form-control-lg', {
                'is-invalid': errors.name
              })}
              placeholder="Instagram URL"
              name="instagram"
              value={this.state.instagram}
              onChange={this.onChange}
            />
            {errors.instagram && (<div className='invalid-feedback'>{errors.instagram}</div>)}
          </div>
        </div>
      );
    }

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create Your Profile</h1>
              <form noValidate onSubmit={this.onSubmit}>
                <TextField
                  placeholder="Profile Handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="Must Be Unique"
                />

                <div className="form-group">
                  <select
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.name
                    })}
                    name="status"
                    value={this.state.status}
                    onChange={this.onChange}
                  >
                    <option value="0">Select What Position Fits You Best</option>
                    <option value="Entry-Level Developer">Entry-Level Developer</option>
                    <option value="Junior Developer">Junior Developer</option>
                    <option value="Senior Developer">Senior Developer</option>
                    <option value="Project Manager">Project Manager</option>
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Other Position">Other Position</option>
                  </select>
                  {errors.status && (<div className='invalid-feedback'>{errors.status}</div>)}
                </div>

                <TextField
                  placeholder="Company"
                  name="company"
                  value={this.state.company}
                  onChange={this.onChange}
                  error={errors.company}
                />
                <TextField
                  placeholder="Website"
                  name="website"
                  value={this.state.website}
                  onChange={this.onChange}
                  error={errors.website}
                />
                <TextField
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                />
                <TextField
                  placeholder="* Skills"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.onChange}
                  error={errors.skills}
                  info="Use Commas in-between your skills"
                />
                <TextField
                  placeholder="Github Username"
                  name="githubusername"
                  value={this.state.githubusername}
                  onChange={this.onChange}
                  error={errors.githubusername}
                />

                <div className="form-group">
                  <textarea
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.name
                    })}
                    placeholder="A short bio of yourself"
                    name="bio"
                    value={this.state.bio}
                    onChange={this.onChange}
                  ></textarea>
                  {errors.bio && (<div className='invalid-feedback'>{errors.bio}</div>)}
                </div>

                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(previous => ({
                        displaySocialInputs: !previous.displaySocialInputs
                      }));
                    }}
                    className="btn btn-info"
                  >Add Your Socials</button>
                </div>
                {inputs}
                <input type="submit" className="btn btn-outline-info btn-block" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { createUserProfile })(withRouter(CreateProfile));