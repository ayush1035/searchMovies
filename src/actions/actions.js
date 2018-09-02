import * as types from '../constants/actionTypes.js';

export function fetchMovies()
{
    return {
        type: types.FETCH_DATA
    }
}

export function sortByYear()
{
    return {
        type: types.SORT_BY_YEAR
    }
}

export function getByCountry(country)
{
    return {
        type: types.FETCH_BY_COUNTRY,
        country: country
    }
}

export function getByLanguage(language)
{
    return {
        type: types.FETCH_BY_LANGUAGE,
        language: language
    }

}

export function fetchMoviesSuccess(movies)
{
    return {
        type: types.FETCH_DATA_SUCCESS,
        movies: movies
    }
}

export function fetchMoviesFailure(err)
{
    return {
        type: types.FETCH_DATA_FAILURE,
        error: err.message
    }
}

export function fetchMovieDetail(imdbID)
{
    return {
        type: types.FETCH_MOVIE_DETAIL,
        imdbID: imdbID
    }
}

export function fetchMovieDetailFailure(err)
{
    return {
        type: types.FETCH_MOVIE_DETAIL_FAILURE,
        error: err.message
    }
}

export function fetchMovieDetailSuccess(movieDetail)
{
    return {
        type: types.FETCH_MOVIE_DETAIL_SUCCESS,
        movieDetail: movieDetail
    }
}

export function fetchSearchedMovies(searchText)
{
    return {
        type: types.FETCH_SEARCHED_MOVIES,
        searchText: searchText
    }
}

export function fetchSearchedMoviesFailure(err)
{
    return {
        type: types.FETCH_SEARCHED_MOVIES_FAILURE,
        error: err.message
    }
}

export function fetchSearchedMoviesSuccess(searchedMovies)
{
    return {
        type: types.FETCH_SEARCHED_MOVIES_SUCCESS,
        searchedMovies: searchedMovies.Search
    }
}



export function toggleLoader(isLoader)
{
    return {
        type:types.TOGGLE_LOADER,
        isLoader:isLoader
    };
}