import React, { Component } from 'react';
import './App.css';
import {listMovies} from './data.js';
// import LoadSpinner from '../src/components/loadSpinner'
// import Header from '../src/components/loadSpinner'
import UpdatedComponent from '../src/components/loadSpinner'
import Search from '../src/components/search'
import ListCard from '../src/components/ListeCard';
import AddMovie from './AddMovie';
import {Button,ButtonToolbar} from 'react-bootstrap';


class App extends  Component {
  constructor(props){
    super(props);
    this.state={
      listMovies:listMovies,
      search:'',
      rateNum:0
      // addMovieShow :false,



    }
  }


  addMovie =(el)=>{
    console.log('hello')
     this.setState({
       listMovies:[...this.state.listMovies,el]
     })
  }

  searching=(el)=>{
    this.setState({
      search:el
    })
  }
  rating =(number)=>{
    this.setState({
      rateNum:number
    })
  }

  render(){

    

    return (

    <div>
    
     
        <Search  
          search={this.searching}
          handelRate={this.rating}
          rate={this.state.rateNum}
        />
        <ListCard 
          listMovies={this.state.listMovies}
          searchName={this.state.search} 
          rate={this.state.rateNum}
        />
        <AddMovie 
            addMovie={this.addMovie} 
        />

    </div>
  );
}
    
  
}

export default UpdatedComponent(App);
