import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../../src/Firebase/firebase.init';
import Loading from '../Loading/Loading';


const RequiredAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if(loading){
        if(loading){
            return <Loading></Loading>
        }
    }
    if(!user){
        return <Navigate to="/Login" state={{ from: location }} replace />;
    }
    if(user){
        return children;
    }
   
        
    
    
    
   
};
export default RequiredAuth;