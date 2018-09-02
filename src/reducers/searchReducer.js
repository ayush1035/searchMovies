import * as actionTypes from "../constants/actionTypes.js";

const initialState = {
    searchedMovies: []
};

export const searchReducer  = (state = initialState,  action) => {
    switch (action.type)
    {
        case actionTypes.FETCH_SEARCHED_MOVIES_SUCCESS:
            return Object.assign({}, ...state, {searchedMovies:action.searchedMovies});
        default:
            return state;    
    }
}