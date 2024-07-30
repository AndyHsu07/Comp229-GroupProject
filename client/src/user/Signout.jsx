import React from 'react';
import { Navigate } from 'react-router-dom';
// import {useNavigate} from 'react-router-dom';
import {signout} from '../../lib/api-auth';
import auth from '../../auth/auth-helper';


const Signout = ()=>{


        auth.clearJWT(()=>{
                   
        })
        
        return  <Navigate to="/login" replace />;
}

export default Signout;