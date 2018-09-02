import * as actionTypes from "../constants/actionTypes.js";

const initialState = {
    movies: {},
};

export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DATA_SUCCESS:
            return Object.assign({}, ...state, { movies: action.movies });
        default:
            return state;
    }
}