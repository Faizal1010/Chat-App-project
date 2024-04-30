import React, { useState, useEffect }  from 'react'
import './sent.css'
import socket from '../../socket'

const sent = (props) => {

  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      socket.emit('chat message', message);
      console.log(message)
      setMessage('');
    }
  };

  return (
    <div className='sent'>
      <div className="sent-msg">{props.msg}</div>
      {/* <div className="sent-msg"></div> */}
      <div className="sent-time">
        9:19 pm
      </div>
    </div>
  )
}

export default sent
