import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if(loading){
        return <p className='text-m font-semibold text-center'>Loading...</p>
    }

    if(user){
        return children;
    }
    return (
        <Navigate state={location.pathname} to="/loginpage"></Navigate>
    );
};

export default PrivateRoute;