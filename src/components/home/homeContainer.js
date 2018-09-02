import {HomeBusiness} from './homeBusiness.js'
import * as stateActions from "../../actions/actions.js";
import { connect } from 'react-redux';

const mapStateToProps = state => {
    let data = {
        movies: state.state.movies,
        error: state.error.error,
        isLoader: state.isLoader.isLoader
    };
    return data;
};

const mapDispatchToProps = dispatch => ({
    getMovies: () => dispatch(stateActions.fetchMovies()),
    getSearchedMovies: (searchText) => dispatch(stateActions.fetchSearchedMovies(searchText)),
    sortByYear:() => dispatch(stateActions.sortByYear()),
    getByCountry:(country) => dispatch(stateActions.getByCountry(country)),
    getByLanguage:(language) => dispatch(stateActions.getByLanguage(language))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeBusiness);