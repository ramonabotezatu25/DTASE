import types from '../actionTypes/professor.actionType'

function approve(approved) {
    return {
        type: types.APPROVE_THESSIS,
        approved
    }
}

export default {
    approve,
}
