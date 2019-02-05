import React from 'react';
import FontAwesome from 'react-fontawesome';

import NavigationItems from './NavigationItems';
import SideNav from 'react-simple-sidenav';

const Navigation = (props) => {

  const navBars = () => (
    <div>
      <FontAwesome name='bars'
        onClick={props.onOpenNav}
        style={{
          color: '#0074D9',
          padding: '10px',
          cursor: 'pointer',
          margin: '20px 0px 0px 20px',
          backgroundColor: 'lightGrey',
          borderRadius: '5px'
        }}
      />
    </div>
  );

  return (
    <div>
      <SideNav
        showNav={props.showNav}
        onHideNav={props.onHideNav}
        navStyle={{
          background: '#1E1E2E',
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