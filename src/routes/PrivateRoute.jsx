import React from 'react'
import { Navigate } from 'react-router-dom'
import { auth } from 'src/config/firebase'

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  return auth.currentUser ? children : <Navigate to='/admin' />
}

export default PrivateRoute
