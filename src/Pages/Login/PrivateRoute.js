import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useUserContext from '../../hooks/useUserContext';

const PrivateRoute = ({children,...rest}) => {
    const {user} = useUserContext();
    let location = useLocation()
    if(user?.email){
        return children;
    }
    return <Navigate to="/home" state={{from:location}} ></Navigate>
};

export default PrivateRoute;