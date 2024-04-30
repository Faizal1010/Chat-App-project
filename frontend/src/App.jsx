import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './pages/home/homepage'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login/login'
import SignUp from './pages/signup/signup'
import {Toaster} from 'react-hot-toast'
function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
      <Toaster/>
    </div>
    )
}

export default App
