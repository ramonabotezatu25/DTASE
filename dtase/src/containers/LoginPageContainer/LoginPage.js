import React from 'react'
import './LoginPage.css'
import LoginIntro from '../../components/loginPageComponent/login-intro-component'

const LoginPage = props => {
    console.log("login page");

    return ( 
        <div className="login-page-container">
            <LoginIntro/>
            <p>ramona</p>
        </div>
    );

};
export default LoginPage;