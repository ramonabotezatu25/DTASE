import userActionTypes from '../actions/user.action'

const INITIAL_STATE = {
    username: 'student test',
    password: 'test@test.com',
    type: 'student',
    isAuthenticated: false,

}

const userReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;
    switch(type) {
        case userActionTypes.LOG_IN: {
            return {
                ...state,
                ...payload,
            }
        }
        default:
            return state

    }
}

export default userReducer;
