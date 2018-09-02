import {call, put, takeEvery, all} from "redux-saga/effects";
import * as actionTypes from "../constants/actionTypes.js";
import * as actions from "../actions/actions.js";
import * as API from "../apiCalls/getApi.js";

export function* fetchSaga()
{
    try {
        yield put(actions.toggleLoader(true));
        let movies = yield call(API.getApiCall);
        yield put(actions.fetchMoviesSuccess(movies));
        yield put(actions.toggleLoader(false));
    }
    catch (err) {
        yield put(actions.fetchMoviesFailure(err));
        yield put(actions.toggleLoader(false));
    }
}
export function* fetchByCountry(action)
{
    try {
        yield put(actions.toggleLoader(true));
        let movies = yield call(API.getApiCountryCall, action.country);
        yield put(actions.fetchMoviesSuccess(movies));
        yield put(actions.toggleLoader(false));
    }
    catch (err) {
        yield put(actions.fetchMoviesFailure(err));
        yield put(actions.toggleLoader(false));
    }
}
export function* fetchByLanguage(action)
{
    try {
        yield put(actions.toggleLoader(true));
        let movies = yield call(API.getApiLanguageCall, action.language);
        yield put(actions.fetchMoviesSuccess(movies));
        yield put(actions.toggleLoader(false));
    }
    catch (err) {
        yield put(actions.fetchMoviesFailure(err));
        yield put(actions.toggleLoader(false));
    }
}


export function* fetchSearchedMoviesSaga(action)
{
    try {
        yield put(actions.toggleLoader(true));
        let movies = yield call(API.getApiSearchCall, action.searchText);
        yield put(actions.fetchMoviesSuccess(movies));
        yield put(actions.toggleLoader(false));
    }
    catch (err) {
        yield put(actions.fetchMoviesFailure(err));
        yield put(actions.toggleLoader(false));
    }
}

export function* fetchSortByYearSaga()
{
    try {
        yield put(actions.toggleLoader(true));
        let movies = yield call(API.getSortByYear);
        yield put(actions.fetchMoviesSuccess(movies));
        yield put(actions.toggleLoader(false));
    }
    catch (err) {
        yield put(actions.fetchMoviesFailure(err));
        yield put(actions.toggleLoader(false));
    }
}

export function* watchFetchSaga() {
    yield takeEvery(actionTypes.FETCH_DATA, fetchSaga);
}

export function* watchSortByYear() {
    yield takeEvery(actionTypes.SORT_BY_YEAR, fetchSortByYearSaga);
}

export function* watchFetchSearchedMoviesSaga() {
    yield takeEvery(actionTypes.FETCH_SEARCHED_MOVIES, fetchSearchedMoviesSaga);
}

export function* watchFetchByLanguage() {
    yield takeEvery(actionTypes.FETCH_BY_LANGUAGE, fetchByLanguage);
}
export function* watchFetchByCountry() {
    yield takeEvery(actionTypes.FETCH_BY_COUNTRY, fetchByCountry);
}

export default function* rootSaga() {
    yield all([watchFetchSaga(),watchFetchSearchedMoviesSaga(),watchSortByYear(),watchFetchByCountry(),watchFetchByLanguage()]);
}