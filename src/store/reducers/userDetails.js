import initialState from '../initialState';
import * as actionTypes from '../actionTypes';

export default (state = initialState.userDetails, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_USER_DETAILS:
            return {
                ...state,
                ...action.userDetails
            };

        default:
            return state;
    }
};