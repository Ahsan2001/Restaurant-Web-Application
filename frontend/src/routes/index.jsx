import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Signup } from '../pages';


const WebRoutes = () => {
  return (
      <Router>
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={ <h1>404 Page Error</h1>} />
          </Routes>
      </Router>
  )
}

export default WebRoutes