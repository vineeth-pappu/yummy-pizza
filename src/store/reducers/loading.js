import initialState from '../initialState';
import * as actionTypes from '../actionTypes';

export default (state = initialState.loading, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_LOADER:
            return action.status;

        default:
            return state;
    }
};