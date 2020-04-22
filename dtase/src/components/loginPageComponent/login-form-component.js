import "./loginPageComponent.scss";
import { TextField } from 'office-ui-fabric-react/lib/TextField'
import React, { Component } from 'react';
import { Stack, PrimaryButton } from 'office-ui-fabric-react'
import { TooltipHost } from 'office-ui-fabric-react/lib/Tooltip';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import {
    NotificationContainer,
    NotificationManager
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import { Redirect } from 'react-router-dom'
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';


class LoginForm extends Component {
    state = {
        username: '',
        password: '',
        type: 'student',
        isErrorMessageHidden: false,
        isAuthenticated: false,
        redirectToReferrer: false,
    };

    accountType = 'student';

    handleLogin = (event) => {
        if (this.state.username === '' && this.state.password === '') {
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
            this.setState({ type: this.accountType })
        } else {
            this.accountType = 'student';
            this.setState({ type: this.accountType });
        }
        this.accountType = this.state.type;
    }



    handleTextChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const defaults = { username: 'username', password: 'password' };
        // const { from } = this.props.location.state || { from: { pathname: '/' + this.accountType} }
        const { from } = { from: { pathname: '/' + this.state.type } }
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return (
                <Redirect to={from} />
            )
        }

        return (
            <div className="login-form-container">
                {/* <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg6">  */}
                    {this.state.isErrorMessageHidden ? null : <NotificationContainer />}
                    <div className="login-form">
                        <h2 style={{ marginLeft: '20%' }}>Login</h2>
                        <div className="form-inputs">
                            <Stack verticalAlign tokens={{ childrenGap: 50 }} styles={{ root: { width: 400 } }}>
                                <Toggle
                                    label={
                                        <div>
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

                                <TextField
                                    className="input-text-field"
                                    placeholder={defaults.username}
                                    id="usernameInput"
                                    name='username'
                                    value={this.state.username}
                                    onChange={this.handleTextChange}
                                    styles={{ fieldGroup: { width: '30%', height: 40 } }}
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
                                <Fabric> <PrimaryButton text="Log in" onClick={this.handleLogin} allowDisabledFocus /></Fabric>
                            </Stack>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        );
    };

    mapStateToProps = state => {
        return {
            username: state.user.username,
            password: state.user.password,
            type: state.user.type    //this state is the one we set in reducer.js ( initialState )
        }
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

export default LoginForm;