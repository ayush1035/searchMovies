import { errorHandleReducer } from './reducers/errorHandleReducer.js';
import { detailReducer } from './reducers/detailReducer.js';
import { searchReducer } from './reducers/searchReducer.js';
import { homeReducer } from './reducers/homeReducer.js';
import { loaderReducer } from './reducers/isLoaderReducer.js';

import * as types from './constants/actionTypes.js';

describe('error Handler reducer', () => {
    it('should return the initial state', () => {
        expect(errorHandleReducer(undefined, {})).toEqual(
            {
                error: ""
            }
        )
    });
    it('should return the initial state', () => {
        expect(detailReducer(undefined, {})).toEqual(
            {
                movieDetail: {}
            }
        )
    });
    it('should return the initial state', () => {
        expect(homeReducer(undefined, {})).toEqual(
            {
                movies: []
            }
        )
    });
    it('should return the initial state', () => {
        expect(searchReducer(undefined, {})).toEqual(
            {
                searchedMovies: []
            }
        )
    });
    it('should return the initial state', () => {
        expect(loaderReducer(undefined, {})).toEqual(
            {
                isLoader: false
            }
        )
    });


});