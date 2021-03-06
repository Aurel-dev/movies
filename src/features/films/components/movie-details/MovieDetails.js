import React, { Component } from "react";

export default class MovieDetails extends Component {

    render () {
        return(
           <div className="w-25 p-4 d-flex flex-column bg-info">
                { this.props.movie ? (
                    <>
                        <h5 className="text-white">{ this.props.movie.title }</h5>
                        <hr className="w-100" />
                        <div>
                        <img alt="" className="d-block mx-auto w-100 h-200" src={ this.props.movie.img } /> 
                        </div>
                        <hr className="w-100" />
                        <span className="text-white">{ this.props.movie.details}</span>
                        <hr className="w-100" />
                        <span className="text-white">{ this.props.movie.description }</span>
                    </>
                ) : null }
           </div> 
        );
    }

}