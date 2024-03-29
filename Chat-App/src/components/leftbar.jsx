import React from 'react'
import viteLogo from '/vite.svg'
import reactLogo from '../assets/react.svg'
import '../components/leftbar.css'

const leftbar = () => {
  return (
    <div>
      <div className="left">
    <div className="logo">
      <img src={viteLogo}/>
      <img src={reactLogo}/>
    </div>
    </div>

    </div>
  )
}

export default leftbar
