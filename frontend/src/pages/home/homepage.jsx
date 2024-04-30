import React from 'react'
import Leftbar from '../../components/Left/leftbar.jsx'
import Middlebar from '../../components/Middle/middlebar.jsx'
import Rightbar from '../../components/Right/rightbar.jsx'
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
