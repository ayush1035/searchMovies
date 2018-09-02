import React from 'react';
import Home from './homePresentational.js';
import PropTypes from 'prop-types';


export class HomeBusiness extends React.Component {
    constructor(props) {
        super(props);
        this.onSearchClick = this.onSearchClick.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.newMovies = this.newMovies.bind(this);
        this.getByLanguage = this.getByLanguage.bind(this);
        this.getByCountry = this.getByCountry.bind(this);

    }

    getByCountry(e) {
        this.props.getByCountry(e.target.innerHTML);
    }

    getByLanguage(e) {
        this.props.getByLanguage(e.target.innerHTML);
    }

    newMovies() {
        this.props.sortByYear();
    }

    onSearchClick() {
        this.props.getSearchedMovies(this.state.searchText);

    }

    onChangeInput(e) {
        this.setState({
            searchText: e.target.value
        })
    }

    componentDidMount() {
        this.props.getMovies();
    }
    render() {
        return (
            <Home movies={this.props.movies} newMovies={this.newMovies} getByCountry={this.getByCountry} getByLanguage={this.getByLanguage} error={this.props.error} isLoader={this.props.isLoader} search={this.onSearchClick} changeText={this.onChangeInput} />
        );
    }
}
HomeBusiness.propTypes = {
    getMovies: PropTypes.func,
    movies: PropTypes.array,
    error: PropTypes.string,
    isLoader: PropTypes.bool,
};