import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from "./Component/MovieList"
import MovieCard from "./Component/MovieCard"

import React, { Component } from 'react'

export default class App extends Component {
  state={
    number:1,
    test:<></>
  }
  // down=()=>{
  //   this.setState({test:<MovieList number={this.state.number} ></MovieList>})
  // }
  
   lis=()=>{
  
    
      this.setState({number:this.state.number-1,test:<MovieList number={this.state.number} ></MovieList>})
    
  }
  

  render() {
    return (
      <div className="App">
          <MovieCard title="test" description="test" rate="test"/>
        <button onClick={this.lis}>test</button>
        {this.state.test}
    </div>
    )
  }
}
