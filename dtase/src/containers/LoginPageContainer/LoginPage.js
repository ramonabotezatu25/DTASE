import React from 'react'
import './LoginPage.scss'
import LoginIntro from '../../components/loginPageComponent/login-intro-component'
import LoginForm from '../../components/loginPageComponent/login-form-component'

const LoginPage = props => {
    console.log("login page");

    return (
        // <div class="ms-Grid-row" style={{height:'100%'}}>
        //     <div className="login-page-container">
        //         <LoginIntro />
        //         <LoginForm />
        //     </div>
        // </div>
        <div>
            <LoginForm />
        </div>
    );

};
export default LoginPage;