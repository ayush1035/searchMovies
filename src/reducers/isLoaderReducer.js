import * as actionTypes from "../constants/actionTypes.js";

const initialState = {
    isLoader:false
};

export const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_LOADER:
           return  Object.assign({},...state,{isLoader:action.isLoader});
        default:
            return state;

    }
};

