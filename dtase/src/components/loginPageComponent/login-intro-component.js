import React from 'react'
import './loginPageComponent.css'
import '../../assets/CSIE-logo.png'
const loginIntro = props => {
    console.log("login intro");

    return ( 
        <div className= "info-left-page">
            <div className="title-login-page">ACADEMIA DE STUDII ECONOMICE DIN BUCURESTI</div>
            <div  className="logo-wrapper">
            <img className="logo-login-page" src={require('../../assets/CSIE-logo.png')} />
            </div>
            <div className="title-login-page subtitle-login-page">FACULTATEA DE CIBERNETICA, STATISTICA SI INFORMATICA ECONOMICA </div>
        </div>
    );

};
export default loginIntro;