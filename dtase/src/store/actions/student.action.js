import types from '../actionTypes/student.actionType'

export function upload(thessisFile) {
    return {
        type: types.UPLOAD_THESSIS,
        thessisFile
    }
}

export default {
    upload
}