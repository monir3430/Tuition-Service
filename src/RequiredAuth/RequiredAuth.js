import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../src/Firebase/firebase.init'


const RequiredAuth = (children) => {
    const [user, loading, error] = useAuthState(auth);
    const Navigate = useNavigate();
    const location = useLocation();
    
    if(loading){
        return <p>Loading</p>
    }
    
    if(user){
        return children;
    } else{
        return <Navigate to="/Login" state={{from: location}} replace />
    }
};
export default RequiredAuth;