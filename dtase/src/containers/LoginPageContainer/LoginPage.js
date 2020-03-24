import React from 'react'
import './LoginPage.scss'
import LoginIntro from '../../components/loginPageComponent/login-intro-component'
import LoginForm from '../../components/loginPageComponent/login-form-component'

const LoginPage = props => {
    console.log("login page");

    return ( 
        <div className="ms-Grid-row login-page-container">
            <LoginIntro/>
            <LoginForm/>
        </div>
    );

};
export default LoginPage;