import "./loginPageComponent.scss";
import { TextField } from 'office-ui-fabric-react/lib/TextField'
import React, { Component } from 'react';
import { Stack, PrimaryButton } from 'office-ui-fabric-react'
import { TooltipHost } from 'office-ui-fabric-react/lib/Tooltip';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import {
    NotificationContainer,
    NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import { Redirect } from 'react-router-dom'
import {connect} from "react-redux";
import UserActionCreator from '../../store/actions/user.action'
import ASE_LOGO from '../../assets/Logo_ASE_Bucharest.png'

class LoginForm extends Component <IProps> {
    state = {
        username: '',
        password: '',
        type: 'student',
        isErrorMessageHidden: false,
        isAuthenticated: false,
        redirectToReferrer: false,
    };

    accountType = 'student';

    handleLogin = () => {
       const {dispatch} =  this.props;
       const {username, password} =  this.state;
       const payload = {username, password, isAuthenticated: true};
       dispatch(UserActionCreator.login(payload));
       this.setState(
           {redirectToReferrer: true }
           )

        if (username === '' && password === '') {
            this.setState({ isErrorMessageHidden: false });
                NotificationManager.error("All fields are required", "Error!");
        }
        else {
            this.setState({ isErrorMessageHidden: false });
            NotificationManager.success("You have been logged in", "Success!");
            fakeAuth.authenticate(() => {
                this.setState({ redirectToReferrer: true })
            })
        }
    };

    _onToggleChange = (event, checked) => {
        if (checked) {
            this.accountType = 'professor'
            this.setState(
                { type: this.accountType })
        } else {
            this.accountType = 'student';
            this.setState( { type: this.accountType });
        }
        this.accountType = this.type;

    }



    handleTextChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const defaults = { username: 'Username', password: 'Password' };
        const { from } = { from: { pathname: '/' + this.accountType } }
        const {redirectToReferrer}  = this.state.redirectToReferrer;
        console.warn('state redirect' , this.state.redirectToReferrer)
        if (redirectToReferrer) {
            return (
                <Redirect to={from} />
            )
        }

        return (
            <div className="login-form-container">
                    {this.isErrorMessageHidden ? null : <NotificationContainer />}
                    <div className= "header-login-form">
                        <div className="header-logo">
                            <img className="logo" alt="image" src = {ASE_LOGO}/>
                        </div>
                        <div className="login-title">Login</div>
                    </div>
                    <div className="login-form"  style={{}}>
                        <div className="form-inputs">
                            <Stack verticalAlign tokens={{ childrenGap: 30 }} styles={{ root: { width: "70%" }}}>
                                <div className="toggle-btn">
                                <Toggle
                                    label={
                                        <div style={{width: 200}}>
                                            Account Type{' '}
                                            <TooltipHost content="Info tooltip">
                                                <Icon iconName="Info" aria-label="Info tooltip" />
                                            </TooltipHost>
                                        </div>
                                    }
                                    inlineLabel
                                    onText="Professor"
                                    offText="Student"
                                    defaultChecked={false}
                                    onChange={this._onToggleChange}
                                />
                                </div>

                                <TextField
                                    className="input-text-field"
                                    placeholder={defaults.username}
                                    id="usernameInput"
                                    name='username'
                                    value={this.state.username}
                                    onChange={this.handleTextChange}
                                    styles={{ fieldGroup: { width: '100%', height: 40} }}
                                    autoFocus

                                />

                                <TextField
                                    className="input-text-field"
                                    placeholder={defaults.password}
                                    id="passwordInput"
                                    name='password'
                                    type='password'
                                    value={this.state.password}
                                    onChange={this.handleTextChange}
                                    styles={{ fieldGroup: { width: '100%', height: 40 } }}

                                />
                                <PrimaryButton className="login-btn" text="Log in" onClick={this.handleLogin} allowDisabledFocus />
                            </Stack>
                        </div>
                    </div>
                {/* </div> */}
                    </div>

        );
    };
}

export const fakeAuth = {
    isAuthenticated: false,
    type: 'student',
    authenticate(cb) {
        this.isAuthenticated = true;
        this.type = this.accountType;
        setTimeout(cb, 5000) // fake async
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 3000) // fake async
    }
};

const mapStateToProps = (state) => ({
    username: state.username,
    password: state.password,
    type: state.type,    //this state is the one we set in reducer.js ( initialState )

});

export default connect(mapStateToProps)(LoginForm);
