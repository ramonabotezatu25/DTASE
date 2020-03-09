import { combineReducers } from 'redux';
import professorReducer from './reducers/professor.reducer';
import studentReducer from './reducers/student.reducer';
import  userReducer from './reducers/user.reducer';

const rootReducer = combineReducers({
    user : userReducer,
    student: studentReducer,
    professor: professorReducer,
})

export default rootReducer;