import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Signup } from '../pages';


const WebRoutes = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<Signup />} />
          </Routes>
      </Router>
  )
}

export default WebRoutes