import "./loginPageComponent.scss";
// import { Stack } from 'office-ui-fabric-react/lib/Stack'
import { TextField } from 'office-ui-fabric-react/lib/TextField'
import React, { useState } from 'react';
import { Stack, PrimaryButton } from 'office-ui-fabric-react'
import { TooltipHost } from 'office-ui-fabric-react/lib/Tooltip';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

// const [password, setPassword] = useState(" ");
// const [email, setEmail] = useState(" ");

const LoginForm = props => {

    //store instructions about how the state managed by redux should be mapped to props you can use in this container
    console.log(props);

    const defaults = { email: "Username", password: "Password" };

    return (
        <div className="login-form-container">
            <div className="login-form">
                <h2>Login</h2>
                <div className="form-inputs">
                    <form onSubmit={handleSubmit}>
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
                                onChange={_onChange}
                            />

                            <TextField
                                className="input-text-field"
                                autoFocus
                                placeholder={defaults.email}
                                name='username'
                                // value={email}
                                // onChange={e => setEmail(e.target.value)}                                // onClick={event => { clearInputs(event.target.value) }}
                                styles={{ fieldGroup: { width: 400, height: 40 } }}
                            />

                            <TextField
                                className="input-text-field"
                                placeholder={defaults.password}
                                name='psw'
                                type='password'
                                // value={password}
                                // onChange={e => setPassword(e.target.value)}
                                styles={{ fieldGroup: { width: 400, height: 40 } }}
                            />

                            <PrimaryButton text="Log in" onClick={setUserCredentials} allowDisabledFocus />
                        </Stack>
                    </form>

                </div>
            </div>
        </div>
    )
}

const setUserCredentials = (props) => {
    console.log(props)
}

function validateForm() {
    // return email.length > 0 && password.length > 0;
}

function handleSubmit(event) {
    event.preventDefault();
}

function  _onChange (event, checked) {
    console.log(event.target)
    console.log(checked)
    // this.setState({ value1: newValue || '' });
  };

      // This block should NOT be necessary, but there's currently a bug (#1350) where a controlled
      // TextField will continue to accept input even if its `value` prop isn't updated.
      // (The correct behavior is that the displayed value should *always* match the `value` prop.
      // If the `value` prop isn't updated in response to user input, the input should be ignored.)
      // Because this is a large behavior change, the bug won't be fixed until Fabric 7.
      // As a workaround, force re-rendering with the existing value.
    //   this.setState({ value2: this.state.value2 });

const mapStateToProps = state => {
    return {
        username: state.user.username,
        password: state.user.password,
        type: state.user.type    //this state is the one we set in reducer.js ( initialState )
    }
};


export default LoginForm;