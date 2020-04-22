import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { fakeAuth } from './loginPageComponent/login-form-component';

export const PrivateRoute = ({component: Component, ...rest}) => (
         <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated === true
            ? <Component {...props}/> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )}/> 
      
); 
