import React, { Component } from 'react'
import MovieCard from "./MovieCard"

export default class MovieList extends Component {
    state={
        Movies:[{title:"movie0", description:"despcription0", posterUrl:"url", rate:"0"},
        {title:"movie1", description:"despcription1", posterUrl:"url", rate:"1"}]
    }


    
    render() {
        return (
            <div>
               <MovieCard 
            //    title={this.state.Movies[0].title}  
               title={this.state.Movies[this.props.number].title}
               description={this.state.Movies[this.props.number].description} 
               rate={this.state.Movies[this.props.number].rate} />
            </div>
        )
    }

}
