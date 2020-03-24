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
import {Redirect} from 'react-router-dom';

class LoginForm extends Component {
    state = {
        username: '',
        password: '',
        type: 'student',
        isErrorMessageHidden:  false,
        isAuthenticated: false,
        redirectToReferrer: false,
    };

    accountType = 'student'; 

    constructor() {
        super();

    }


    handleLogin = (event) => {
        if (this.state.username === '' && this.state.password === ''){
            this.setState({ isErrorMessageHidden: false });
            NotificationManager.error("All fields are required", "Error!");
        }
        else {
            console.log("else")
            this.setState({ isErrorMessageHidden: false });
            NotificationManager.success("You have been logged in", "Success!");
            fakeAuth.authenticate(()=> {
                this.setState({redirectToReferrer: true})
            })
            console.log("Ramona", this.props)
            

        }
    };

    _onToggleChange = (event, checked) => {
        checked ? this.setState({type: 'professor'}) : this.setState({type: 'student'});
        this.accountType =  this.state.type;
    }
    
    

    handleTextChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    render() {
        const defaults = { username: 'username', password: 'password' };
        const {redirectToReferrer} = this.state;

        console.warn("Ramona state type", this.state.type)
        if (redirectToReferrer) {
            return (
                <Redirect to={this.state.type}/>
            )
          }

        return (
            <div className="ms-Grid-col ms-sm12 ms-hiddenXxlUp login-form-container">
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

                                <PrimaryButton text="Log in" onClick={this.handleLogin} allowDisabledFocus />
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

export const fakeAuth = {
    isAuthenticated: false,
    type: 'student',
    authenticate(cb) {
      this.isAuthenticated = true;
      this.type = this.accountType;
      setTimeout(cb, 100)
    },
  };
  
export default LoginForm;