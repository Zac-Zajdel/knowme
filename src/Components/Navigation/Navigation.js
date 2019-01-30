import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';



class Navigation extends Component {

  //Can't get props
  navBars = () => (
    <div>
      <FontAwesome name='arrows'
        onClick={props.onOpenNav}
        style={{
          color: 'black',
          padding: '25px'
        }}
      />
    </div>
  )
  render() {
    return (
      <div>
        <div>
          Profile
        </div>
        <div>
          Newsfeed
        </div>
      </div>
    );
  }
}

export default Navigation;