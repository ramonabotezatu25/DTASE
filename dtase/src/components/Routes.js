import React, {Component} from 'react';
import {PrivateRoute} from "./PrivateRoute";
import StudentComponent from './student/StudentComponent';
import ProfessorComponent from './professor/ProfessorComponent';
import LoginPage from '../containers/LoginPageContainer/LoginPage';
import history from '../history';
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom'

class Routes extends Component {
    render () {
        return (
            <Router history={history}>
                <Route exact path="/" component = {LoginPage} location={this.props.location}/>
                <Route exact path="/login" component = {LoginPage} location={this.props.location}/>
                <PrivateRoute path="/student" component = {StudentComponent} location={this.props.location} />
                <PrivateRoute path="/professor" component = {ProfessorComponent} location={this.props.location} />
                {/* <Route path="/admin"  component = {AdminDashboard} isAuthenticated={fakeAuth.isAuthenticated} /> */} 
            </Router>
        )
    }
}
export default Routes;