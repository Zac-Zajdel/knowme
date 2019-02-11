import React from 'react';

const Message = ({ userName, text }) => {
  return (
    <div className='message'>
      <div className='username'>{userName}</div>
      <div className='text'>{text}</div>
    </div>
  );
}

export default Message;