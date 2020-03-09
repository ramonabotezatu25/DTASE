import actions from '../actions/user.action'

const INITIAL_STATE = {
    username: 'student test',
    password: 'test@test.com',
    type: ''
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actions.login: {
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

export default userReducer;