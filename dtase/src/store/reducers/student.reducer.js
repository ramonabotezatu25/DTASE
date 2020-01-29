import actions from '../actions/student.action'

const INITIAL_STATE = {
    name: 'student test',
    email: 'test@test.com',
    notification: []
}

const studentReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actions.upload: {
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

export default studentReducer;