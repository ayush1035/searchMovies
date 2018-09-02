import * as actions from './actions/actions.js'
import * as types from './constants/actionTypes.js'

describe('actions', () => {
    let searchText="max";
    let isLoader = true;
    let imdbID = "tt2015381";
    let err = { message: "error is there" };
    let movieDetail = {"Title":"Guardians of the Galaxy Vol. 2","Year":"2017","Rated":"PG-13","Released":"05 May 2017","Runtime":"136 min","Genre":"Action, Adventure, Sci-Fi","Director":"James Gunn","Writer":"James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-lord created by), Steve Gan (Star-lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)","Actors":"Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel","Plot":"The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill's true parentage.","Language":"English","Country":"USA, New Zealand, Canada","Awards":"Nominated for 1 Oscar. Another 7 wins & 26 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.7/10"},{"Source":"Rotten Tomatoes","Value":"83%"},{"Source":"Metacritic","Value":"67/100"}],"Metascore":"67","imdbRating":"7.7","imdbVotes":"336,851","imdbID":"tt3896198","Type":"movie","DVD":"22 Aug 2017","BoxOffice":"$389,804,217","Production":"Walt Disney Pictures","Website":"https://marvel.com/guardians","Response":"True"}
    let movies = [{"Title":"Guardians of the Galaxy Vol. 2","Year":"2017","Rated":"PG-13","Released":"05 May 2017","Runtime":"136 min","Genre":"Action, Adventure, Sci-Fi","Director":"James Gunn","Writer":"James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-lord created by), Steve Gan (Star-lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)","Actors":"Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel","Plot":"The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill's true parentage.","Language":"English","Country":"USA, New Zealand, Canada","Awards":"Nominated for 1 Oscar. Another 7 wins & 26 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.7/10"},{"Source":"Rotten Tomatoes","Value":"83%"},{"Source":"Metacritic","Value":"67/100"}],"Metascore":"67","imdbRating":"7.7","imdbVotes":"336,851","imdbID":"tt3896198","Type":"movie","DVD":"22 Aug 2017","BoxOffice":"$389,804,217","Production":"Walt Disney Pictures","Website":"https://marvel.com/guardians","Response":"True"},{"Title":"Guardians of the Galaxy","Year":"2014","Rated":"PG-13","Released":"01 Aug 2014","Runtime":"121 min","Genre":"Action, Adventure, Sci-Fi","Director":"James Gunn","Writer":"James Gunn, Nicole Perlman, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Bill Mantlo (character created by: Rocket Raccoon), Keith Giffen (character created by: Rocket Raccoon), Jim Starlin (characters created by: Drax the Destroyer,  Gamora & Thanos), Steve Englehart (character created by: Star-Lord), Steve Gan (character created by: Star-Lord), Steve Gerber (character created by: Howard the Duck), Val Mayerik (character created by: Howard the Duck)","Actors":"Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel","Plot":"A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.","Language":"English","Country":"USA","Awards":"Nominated for 2 Oscars. Another 52 wins & 99 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"91%"},{"Source":"Metacritic","Value":"76/100"}],"Metascore":"76","imdbRating":"8.1","imdbVotes":"816,755","imdbID":"tt2015381","Type":"movie","DVD":"09 Dec 2014","BoxOffice":"$270,592,504","Production":"Walt Disney Pictures","Website":"http://marvel.com/guardians","Response":"True"}]
    it('should fetch data for movies', () => {
        const expectedAction = {
            type: types.FETCH_DATA,
        }
        expect(actions.fetchMovies()).toEqual(expectedAction)
    });
    it('Success fetch data for movies', () => {
        const expectedAction = {
            type: types.FETCH_DATA_SUCCESS,
            movies: movies.Search
        }
        expect(actions.fetchMoviesSuccess(movies)).toEqual(expectedAction)
    });
    it('Failure fetch data for movies', () => {
        const expectedAction = {
            type: types.FETCH_DATA_FAILURE,
            error: err.message
        }
        expect(actions.fetchMoviesFailure(err)).toEqual(expectedAction)
    });
    it('should fetch detail for movie', () => {
        const expectedAction = {
            type: types.FETCH_MOVIE_DETAIL,
            imdbID: imdbID
        }
        expect(actions.fetchMovieDetail(imdbID)).toEqual(expectedAction)
    });
    it('Success fetch detail for movie', () => {
        const expectedAction = {
            type: types.FETCH_MOVIE_DETAIL_SUCCESS,
            movieDetail: movieDetail
        }
        expect(actions.fetchMovieDetailSuccess(movieDetail)).toEqual(expectedAction)
    });
    it('Failure fetch detail for movies', () => {
        const expectedAction = {
            type: types.FETCH_MOVIE_DETAIL_FAILURE,
            error: err.message
        }
        expect(actions.fetchMovieDetailFailure(err)).toEqual(expectedAction)
    });
    it('should fetch searched movies', () => {
        const expectedAction = {
            type: types.FETCH_SEARCHED_MOVIES,
            searchText: searchText
        }
        expect(actions.fetchSearchedMovies(searchText)).toEqual(expectedAction)
    });
    it('Success fetch searched  movies', () => {
        const expectedAction = {
            type: types.FETCH_SEARCHED_MOVIES_SUCCESS,
            searchedMovies: movies.Search
        }
        expect(actions.fetchSearchedMoviesSuccess(movies)).toEqual(expectedAction)
    });
    it('Failure fetch searched movies', () => {
        const expectedAction = {
            type: types.FETCH_SEARCHED_MOVIES_FAILURE,
            error: err.message
        }
        expect(actions.fetchSearchedMoviesFailure(err)).toEqual(expectedAction)
    });
    it('should toggle the loader ', () => {
        const expectedAction = {
            type: types.TOGGLE_LOADER,
            isLoader: false
        }
        expect(actions.toggleLoader(false)).toEqual(expectedAction)
    });

})