import types from '../actionTypes/user.actionType'

export function login(user) {
    return {
        type: types.LOG_IN,
        user
    }
}

export default {
    login
}