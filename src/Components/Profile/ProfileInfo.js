import React, { Component } from 'react';

class ProfileInfo extends Component {
  render() {
    return (
      <div className='profile-info'>
        <table className="table table-hover">
          <tbody className='personal'>
            <tr>
              <th scope="row">Phone Number:</th>
              <td className='border'>724-757-4216</td>
            </tr>
            <tr>
              <th scope="row">Email:</th>
              <td className='border'>ghanman@gmail.com</td>
            </tr>
            <tr>
              <th scope="row">Age:</th>
              <td className='border'>50</td>
            </tr>
            <tr>
              <th scope="row">City:</th>
              <td className='border'>Greensburg</td>
            </tr>
            <tr>
              <th scope="row">School:</th>
              <td className='border'>IUP</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProfileInfo;