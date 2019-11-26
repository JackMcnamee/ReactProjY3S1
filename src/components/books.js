import React from 'react';
import BookItem from './bookItem';

class Books extends React.Component{

    render(){
        return this.props.myBooks.map((book)=>{
            return <BookItem key={book._id} book={book}
            ReloadDataMethod={this.props.ReloadDataMethod}></BookItem>
        });
    }
}
export default Books;