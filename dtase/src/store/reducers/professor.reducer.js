import actions from '../actions/professor.action'

const INITIAL_STATE = {
     name: "-initial name-",
     email: "test@test.com",
     notifications: [],
     assignedStudents: [],
}

const professorReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actions.approve : {
            return {
                ...state
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}

export default professorReducer;