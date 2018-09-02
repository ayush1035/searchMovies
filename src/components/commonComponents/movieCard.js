import React from "react";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import ShowMore from 'react-show-more';


class MovieCard extends React.Component{
    render() {
        if(this.props.obj.Poster!=="N/A")
        {
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            return (
          

                <div className="card col-md-2 col-xs-6 cardDiv text-white bg-dark mb-3" activeStyle={{ color: randomColor}}>
                    <div className="card-header productDesc "><ShowMore lines={1} more='more' less='less' anchorClass=''>
                                            {this.props.obj.movie_title} ({this.props.obj.title_year})
                                        </ShowMore>
                                        <p className="card-text genres">{this.props.obj.genres}</p>
                                        </div>
                                       
                    <div className="card-body">
                        <div className="card-text details1">Stars: {this.props.obj.actor_1_name} | {this.props.obj.actor_2_name}</div>
                        <div className="card-text details1">Director: {this.props.obj.director_name}</div>
                        <div className="card-text details1">Budget: $ {this.props.obj.budget}</div>
                        {this.props.obj.country.length>0 && <div className="card-text details1  ">{this.props.obj.language} | {this.props.obj.country}</div>}
                        {this.props.obj.country.length==0 && <div className="card-text details1  ">NA</div>}

                        
                        <a className="btn btn-info cardBtn"  href={this.props.obj.movie_imdb_link}>Go to IMDB</a>               
                    </div>
                    <div className="card-footer text-muted">
                    <span className="rating-star full-star"></span>{this.props.obj.content_rating.length>0 && this.props.obj.content_rating }
                    {this.props.obj.content_rating.length==0 && <span>NA</span> }
                    </div>
                </div>
            );
        }
        else
        {
            return null;
        }
    }
}
MovieCard.propTypes = {
    obj:PropTypes.object
};

export default MovieCard;