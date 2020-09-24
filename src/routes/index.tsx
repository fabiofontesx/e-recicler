import React from 'react';

import AuthenticatedRoutes from './authenticated.routes';
import AppRoutes from './app.routes';

import { useAuth } from '../contexts/AuthContext'
const Routes: React.FC  = () =>{
    const  { isAuthenticated } = useAuth();
    return isAuthenticated ? <AuthenticatedRoutes/> : <AppRoutes />;
}


export default Routes;