import React from 'react';
import {Route, Redirect, Switch} from "react-router-dom";

export const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) => (
         <Route {...rest} render={props => (
        isAuthenticated
            ? (<Component {...props}/>) : (<Redirect to={{  pathname: '/student', state: {from: props.location} }}/> )
    )}/>
    
); 
