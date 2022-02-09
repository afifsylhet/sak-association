

import React from 'react';
import { Navigate, useLocation, } from 'react-router-dom';
import { useAuth } from './useAuth';

const PraviteRoute = ({ children }) => {
    let { user, isLoading } = useAuth();
    const location = useLocation();



    if (isLoading) {
        return <h1 className="text-center mt-5">Loading...</h1>
    }


    if (!user.email) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;


}

export default PraviteRoute;