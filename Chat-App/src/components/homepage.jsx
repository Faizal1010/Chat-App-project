import React from 'react'
import Leftbar from './Left/leftbar'
import Middlebar from './Middle/middlebar.jsx'
import Rightbar from './Right/rightbar.jsx'
import './homepage.css'

const homepage = () => {

  return (
    <div>
        <div className='Page'>
      <Leftbar/>
      <Middlebar/>
      <Rightbar/>
      </div>
    </div>
  )
}

export default homepage
