import { combineReducers } from 'redux';
import professorReducer from './reducers/professor.reducer';
import studentReducer from './reducers/student.reducer';
import { useReducer } from 'react';

const rootReducer = combineReducers({
    student: professorReducer,
    professor: professorReducer,
})

export default rootReducer;