import React from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';
import auth from '../auth/auth-helper';
import Login from '../user/Login'

const PrivateRoute= ({children}) =>{
    const location = useLocation();
    
  if (auth.isAuthenticated()){
  
    return children;
  } else{
    return <Navigate to="/login" replace />;
  }
   
  

}



export default PrivateRoute;