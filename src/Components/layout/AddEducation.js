import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import TextField from '../common/TextField';
import PropTypes from 'prop-types';
import { addUserEducation } from '../../actions/profileActions';

class AddEducation extends Component {

  state = {
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
    disabled: false,
    errors: {}
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();

    const addEducation = {
      school: this.state.school,
      degree: this.state.degree,
      fieldofstudy: this.state.fieldofstudy,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description,
      disabled: this.state.disabled,
      errors: this.state.errors
    }

    this.props.addUserEducation(addEducation, this.props.history);
  }

  onCheck = e => {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="add-education">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">Go Back To Dashboard</Link>
              <h1 className="display-4 text-center">Add Education To Profile</h1>
              <form noValidate onSubmit={this.onSubmit}>
                <TextField
                  type='text'
                  placeholder='School'
                  name='school'
                  value={this.state.school}
                  onChange={this.onChange}
                  errors={errors.school}
                />
                <TextField
                  type='text'
                  placeholder='Degree'
                  name='degree'
                  value={this.state.degree}
                  onChange={this.onChange}
                  errors={errors.degree}
                />
                <TextField
                  type='text'
                  placeholder='Field of Study'
                  name='fieldofstudy'
                  value={this.state.fieldofstudy}
                  onChange={this.onChange}
                  errors={errors.fieldofstudy}
                />
                <h6>From Date</h6>
                <TextField
                  type='date'
                  name='from'
                  value={this.state.from}
                  onChange={this.onChange}
                  errors={errors.from}
                />
                <h6>To Date</h6>
                <TextField
                  type='date'
                  name='to'
                  value={this.state.to}
                  onChange={this.onChange}
                  errors={errors.to}
                  disabled={this.state.disabled ? 'disabled' : ''}
                />
                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="current"
                    value={this.state.current}
                    onChange={this.onCheck}
                    checked={this.state.checked}
                    id="current"
                  />
                  <p className="form-check-label" htmlFor="current">Current Job</p>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Program Description"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}>
                  </textarea>
                </div>
                <input type="submit" className="btn btn-outline-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddEducation.prototypes = {
  addEducation: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { addUserEducation })(withRouter(AddEducation));
