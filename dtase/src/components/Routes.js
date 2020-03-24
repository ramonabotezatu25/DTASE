import {Switch, Route, Link, Router} from 'react-router-dom';
import React, {Component} from 'react';
import {PrivateRoute} from "./PrivateRoute";
import App from '../App';
import StudentDashboard from './student/StudentDashboard';
import ProfessorDashboard from './professor/ProfessorDashboard';
import AdminDashboard from './admin/AdminDashboard';
import Login, {fakeAuth} from "./loginPageComponent/login-form-component";
import LoginPage from '../containers/LoginPageContainer/LoginPage';
import history from '../history';




class Routes extends Component {
    render () {
        return (
            <Router history={history}>
                <Route exact path="/" component = {LoginPage}/>
                <Route exact path="/login" component = {LoginPage}/>
                <Route path="/student" component = {StudentDashboard}  />
                <Route path="/professor" component = {ProfessorDashboard} />
                <Route path="/admin"  component = {AdminDashboard} isAuthenticated={fakeAuth.isAuthenticated} />
            </Router>
        )
    }
}
export default Routes;