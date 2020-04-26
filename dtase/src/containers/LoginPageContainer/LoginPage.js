import React from 'react'
import './LoginPage.scss'
import LoginForm from "../../components/loginPageComponent/login-form-component";

const LoginPage = props => {
    console.log("login page");

    return (
        <div className="loginWrapper">
          <div className="header-title">Academia de studii economice din BUCURESTI</div>
            <div className="login-container">
                <LoginForm />
            </div>
        </div>
    );

};
export default LoginPage;
