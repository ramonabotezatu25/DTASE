import React from 'react'
import './LoginPage.css'
import LoginIntro from '../../components/loginPageComponent/login-intro-component'
import LoginForm from '../../components/loginPageComponent/login-form-component'

const LoginPage = props => {
    console.log("login page");

    return ( 
        <div className="login-page-container">
            <LoginIntro/>
            <LoginForm/>
        </div>
    );

};
export default LoginPage;