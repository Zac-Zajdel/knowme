import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteEducation } from '../../actions/profileActions';

class Education extends Component {

  onDeleteClick = educationId => {
    this.props.deleteEducation(educationId);
  }

  render() {
    const education = this.props.education.map(education => (
      <tr key={education._id}>
        <td>{education.school}</td>
        <td>{education.degree}</td>
        <td>
          <Moment format='MM/DD/YYYY'>{education.from}</Moment> -
          {education.to === null ? (' Currently Enrolled') : (<Moment format='MM/DD/YYYY'>{education.to}</Moment>)}
        </td>
        <td><button onClick={() => this.onDeleteClick(education._id)} className="btn btn-outline-danger">Delete</button></td>
      </tr>
    ));
    return (
      <div>
        <h4 className='mb-4'>Education Credentials</h4>
        <table className="table">
          <thead>
            <tr>
              <th>School</th>
              <th>Degree</th>
              <th>Years</th>
              <th></th>
            </tr>
            {education}
          </thead>
        </table>
      </div>
    );
  }
}

Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired
}

export default connect(null, { deleteEducation })(Education);