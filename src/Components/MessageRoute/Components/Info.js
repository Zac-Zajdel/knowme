import React from 'react';
import User from './user.png';

const Info = () => {
  return (
    <div className='info'>
      <img src={User} alt='Users profile pic' className='user-photo' />
      <div className='username'>Messages</div>
    </div>
  );
}

export default Info;