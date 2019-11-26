import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { Link } from 'react-router-dom';
import { CardColumns } from 'react-bootstrap';

class BookItem extends React.Component{

  constructor(){
    super();
    this.DeleteBook = this.DeleteBook.bind(this);
  }

  DeleteBook(e){
    console.log("Delete Clicked");
    axios.delete("http://localhost:4000/api/books/"+this.props.book._id)
    .then(()=>{
      this.props.ReloadDataMethod();
    })
    .catch();
  }

  render(){
      return(
          
          <div style={{display: 'flex',  justifyContent:'center'}}>
            <br  />
              {/* layout for books entered by user */}
              <CardDeck>
                <Card style={{ width: '30rem' }} className="text-center" border="dark">
                  <Card.Body className="text-left">
                    <Card.Title>{this.props.book.title} by {this.props.book.author}</Card.Title>
                    <Card.Text>{this.props.book.summary}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Genres: {this.props.book.genres}</ListGroupItem>
                    <ListGroupItem>{this.props.book.selectedOption}</ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <Link to={"/edit/" + this.props.book._id} className="btn btn-primary">Edit</Link> 
                    <Button variant="danger" onClick={this.DeleteBook}>Delete</Button> 
                  </Card.Body>
                </Card>
              </CardDeck> 
              <br  />
              <br  />

          </div>
      )
  }
}
export default BookItem;