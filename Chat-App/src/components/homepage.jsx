import React from 'react'
import Leftbar from './Left/leftbar'
import Middlebar from './Middle/middlebar.jsx'
import './homepage.css'

const homepage = () => {
    return (
            <div className='Page'>
                <Leftbar />
                <Middlebar />
            </div>
    )
}

export default homepage
