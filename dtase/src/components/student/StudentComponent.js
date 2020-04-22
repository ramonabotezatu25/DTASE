import React from 'react'
import NavbarMenu from '../_shared/NavbarMenu'
import StudentInfo from './components/StudentInfo'
import StudentDashboard from './components/StudentDashboard'

const StudentComponent = props => {

    return(
        <div>
           <NavbarMenu/>
           <div class="ms-Grid-row">
               <StudentInfo/>
               <StudentDashboard/>
            </div>
        </div>
    );


}
export default StudentComponent;