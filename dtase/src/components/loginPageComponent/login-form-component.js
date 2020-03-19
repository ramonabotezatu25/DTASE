import "./loginPageComponent.scss";
// import { Stack } from 'office-ui-fabric-react/lib/Stack'
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

class LoginForm extends Component {
    state = {
        username: '',
        password: '',
        isErrorMessageHidden:  false,
    };

    constructor() {
        super();
    }


    handleSubmit = (event) => {
        if (this.state.username === '' && this.state.password === ''){
            this.setState({ isErrorMessageHidden: false });
            NotificationManager.error("All fields are required", "Error!");
        }
        else {
            console.log("else")
            this.setState({ isErrorMessageHidden: false });
            NotificationManager.success("You have been logged in", "Success!");

        }
    };

    handleTextChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    render() {
        const defaults = { email: "Username", password: "Password" };
        return (
            <div className="login-form-container">
                {this.state.isErrorMessageHidden ? null : <NotificationContainer />}
                <div className="login-form">
                    <h2 style={{marginLeft: '20%'}}>Login</h2>
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
                                    onChange={this._onChange}
                                />

                                <TextField
                                    className="input-text-field"
                                    placeholder={defaults.email}
                                    id="usernameInput"
                                    name='username'
                                    value={this.state.username}
                                    onChange={this.handleTextChange}
                                    styles={{ fieldGroup: { width: 400, height: 40 } }}
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
                                    styles={{ fieldGroup: { width: 400, height: 40 } }}

                                />

                                <PrimaryButton text="Log in" onClick={this.handleSubmit} allowDisabledFocus />
                            </Stack>
                    </div>
                </div>
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



export default LoginForm;