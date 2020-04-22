import React from 'react'
import './loginPageComponent.scss'
import '../../assets/CSIE-logo.png'

const LoginIntro = props => {
    console.log("login intro");

    return (
        <div className="info-left-page">
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg6">
                <div className="title-login-page">ACADEMIA DE STUDII ECONOMICE DIN BUCURESTI</div>
                <div className="logo-wrapper">
                    {/* <img className="logo-login-page" src={require('../../assets/CSIE-logo.png')} /> */}
                </div>
                <div className="title-login-page subtitle-login-page">FACULTATEA DE CIBERNETICA, STATISTICA SI INFORMATICA ECONOMICA </div>
            </div>
        </div>
    );

};
export default LoginIntro;