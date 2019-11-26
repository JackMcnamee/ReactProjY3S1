import React from 'react';
import Books from './books';
import axios from 'axios';

class Library extends React.Component{

    constructor(){
        super();
        this.ReloadDataMethod = this.ReloadDataMethod.bind(this);
    }

    state = {
        books: []
    };

    // call back function
    componentDidMount() {
        axios.get('http://localhost:4000/api/books')
        .then((response)=>{
            this.setState({books: response.data.books})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    ReloadDataMethod(){
        axios.get('http://localhost:4000/api/books')
        .then((response)=>{
            this.setState({movies: response.data.books})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render(){
        return(
            <div>
                <h2 style={{color:"white"}}>Your Library</h2>
                {/* outputs books */}
                <Books myBooks={this.state.books}
                ReloadDataMethod={this.ReloadDataMethod}></Books>
            </div>
        );
        
    }
}
export default Library;