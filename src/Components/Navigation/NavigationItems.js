import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import style from './navItems.module.css';

const NavigationItems = (props) => {

  const items = [
    {
      type: style.option,
      icon: 'home',
      text: 'Home',
      link: '/'
    },
    {
      type: style.option,
      icon: 'paper-plane',
      text: 'Newsfeed',
      link: '/newsfeed'
    },
    {
      type: style.option,
      icon: 'comment',
      text: 'Messages',
      link: '/messages'
    },
    {
      type: style.option,
      icon: 'cog',
      text: 'Account Settings',
      link: '/settings'
    },
    {
      type: style.option,
      icon: 'sign-out',
      text: 'Sign Out',
      link: '/signout'
    },

  ];

  const showItems = () => {
    return items.map((item, i) => {
      return (
        <div onClick={props.onHideNav} key={i} className={item.type}>
          <Link to={item.link}>
            <FontAwesome name={item.icon} />
            {item.text}
          </Link>
        </div>
      );
    })
  }

  return (
    <div>
      {showItems()}
    </div>
  );
}

export default NavigationItems;