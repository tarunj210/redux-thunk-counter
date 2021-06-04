import { actionTypes } from './actionTypes';


export const increment = () => {
    return function (dispatch) {
        dispatch({
            type: actionTypes.INCREMENT_COUNTER,
        });
    }
}

export const decrement = () => {
    return function (dispatch) {
        dispatch({
            type: actionTypes.DECREMENT_COUNTER,
        });
    }
}
export const reset = () => {
    return function (dispatch) {
        dispatch({
            type: actionTypes.RESET_COUNTER,
        });
    }
}
export const changeCountTo = (numberChange) => {
    return function (dispatch) {
        dispatch({
            type: actionTypes.CHANGE_COUNT,
            payload: numberChange
        });
    }
}
