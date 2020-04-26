import userActionType from '../actionTypes/user.actionType'

function login(payload) {
    return {
        type: userActionType.LOG_IN,
        payload: payload,
    }
}

export default {
    login,
}

