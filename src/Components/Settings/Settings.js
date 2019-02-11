import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './Settings.css';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 600
      }
    }
  }
};

class Settings extends Component {
  render() {
    return (
      <div className='page'>
        <Particles className='particles'
          params={particlesOptions}
        />
      </div>
    );
  }
}

export default Settings;