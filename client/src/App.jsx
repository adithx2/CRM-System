import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Navbar from './components/navabar'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import About from './pages/About'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './pages/Dashboard'
const App = () => {

  return (
    <div>

      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard'

            element={<ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>}

          />


        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App