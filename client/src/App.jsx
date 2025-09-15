import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Common/Navbar'
import Login from './components/core/Auth/Login.jsx'
import Signup from './components/core/Auth/Signup.jsx'
import ForgorPassword from './components/core/Auth/ForgorPassword.jsx'
import VerifyEmail from './components/core/Auth/VerifyEmail.jsx'
import MobileMenu from './components/core/Homepage/MobileMenu.jsx'

const App = () => {
  return (
    <div className='min-h-screen w-full bg-[#000814] overflow-x-hidden overflow-y-hidden'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgot-password' element={<ForgorPassword />} />
        <Route path='/verify-email' element={<VerifyEmail />} />
        <Route path='/mobile-menu' element={<MobileMenu />} />
      </Routes>
    </div>
  )
}

export default App