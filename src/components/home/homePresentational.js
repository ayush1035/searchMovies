import React from "react";
import MovieCard from "../commonComponents/movieCard.js";
import PropTypes from "prop-types";


class Home extends React.Component {
    render() {
        
        if (this.props.isLoader === false) {
            if (this.props.error.length > 0) {
                return (
                    <h1 className="heading">{this.props.error}</h1>
                );
            }
            if(this.props.movies.movies)
            {
            return (
                <div>
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <ul className="nav navUl">
                                <li onClick={this.props.newMovies}>Latest Movies</li>
                                <li><div className="dropdown">
                                    <button className="dropbtn">Country</button>
                                    <div className="dropdown-content">
                                    {this.props.movies.countries.map(country=> <li onClick={this.props.getByCountry}>{country}</li>)}
                                    </div>
                                </div></li>
                                <li><div className="dropdown">
                                    <button className="dropbtn">Language</button>
                                    <div className="dropdown-content">
                                       {this.props.movies.languages.map(language=> <li onClick={this.props.getByLanguage}>{language}</li>)}
                                    </div>
                                </div></li>
                            </ul>
                        </div>
                    </nav>
                    <br />
                    <div className="searchDiv">
                        <form onSubmit={this.props.search}>
                            <input type="text" name="focus" required className="search-box" placeholder="Search movie by name" onChange={this.props.changeText} />
                            <button type="button" className="btn btn-info searchBtn" onClick={this.props.search}>Search</button>
                        </form>
                    </div>
                    <br />
                    <div className="homeDiv container">
                        {this.props.movies.movies.map(item => <MovieCard key={item.imdbID} obj={item} />)}
                    </div>
                    <br />
                </div>
            )}
            else{
                return null;
            }
        }
        else {
            return null;
        }
    }
}
Home.propTypes = {
    movies: PropTypes.array,
    error: PropTypes.string,
    isLoader: PropTypes.bool
};

export default Home;