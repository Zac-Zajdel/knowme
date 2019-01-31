import React from 'react';
import FontAwesome from 'react-fontawesome';
import style from './nav.module.css';

import NavigationItems from './NavigationItems';
import SideNav from 'react-simple-sidenav';

const Navigation = (props) => {

  const navBars = () => (
    <div className={style.icon}>
      <FontAwesome name='bars'
        onClick={props.onOpenNav}
        style={{
          color: 'black',
          padding: '10px',
          cursor: 'pointer',
        }}
      />
    </div>
  );

  return (
    <div className={style.sideNav}>
      <SideNav
        showNav={props.showNav}
        onHideNav={props.onHideNav}
        navStyle={{
          background: '#000033',
          maxWidth: '250px'
        }}
      >
        <NavigationItems
          showNav={props.showNav}
          onHideNav={props.onHideNav}
        />
      </SideNav>
      {navBars()}
    </div>
  );
}

export default Navigation;