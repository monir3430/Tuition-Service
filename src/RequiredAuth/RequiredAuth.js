import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../../src/Firebase/firebase.init';


const RequiredAuth = (children) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    if(!user){
        return <Navigate to ="/Blogs" state ={{from:location}} replace></Navigate>
    }
    
   return children;

        
    
    
    
   
};
export default RequiredAuth;