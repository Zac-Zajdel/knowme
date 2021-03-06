import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteExperience } from '../../actions/profileActions';

class Experience extends Component {

  onDeleteClick = experienceId => {
    this.props.deleteExperience(experienceId);
  }

  render() {
    const experience = this.props.experience.map(experience => (
      <tr key={experience._id}>
        <td>{experience.company}</td>
        <td>{experience.title}</td>
        <td>
          <Moment format='MM/DD/YYYY'>{experience.from}</Moment> -
          {experience.to === null ? (' Current Employer') : (<Moment format='MM/DD/YYYY'>{experience.to}</Moment>)}
        </td>
        <td><button onClick={() => this.onDeleteClick(experience._id)} className="btn btn-outline-danger">Delete</button></td>
      </tr>
    ));
    return (
      <div>
        <h4 className='mb-4'>Experience Credentials</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Years</th>
              <th></th>
            </tr>
            {experience}
          </thead>
        </table>
      </div>
    );
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired
}

export default connect(null, { deleteExperience })(Experience);
