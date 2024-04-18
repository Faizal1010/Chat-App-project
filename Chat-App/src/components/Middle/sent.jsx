import React from 'react'
import './sent.css'

const sent = (props) => {
  return (
    <div className='sent'>
      <div className="sent-msg">{props.msg}</div>
      <div className="sent-time">
        9:19 pm
      </div>
    </div>
  )
}

export default sent
