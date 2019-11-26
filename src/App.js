import React from 'react';
import './App.css';
import EnterBook from './components/enterBook';
import Library from './components/library';
import Edit from './components/edit';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <Router>
        <div className = "App">
          <Navbar bg="dark" variant="dark" sticky="top">
            <Nav className="mr-auto">
              <Nav.Link href="/">Your Library</Nav.Link>
              <Nav.Link href="/enterBook">Enter Book</Nav.Link>
            </Nav>
          </Navbar>

          <Switch>
            
          <Route exact path="/" component={Library}/>
            <Route path="/enterBook" component={EnterBook}/>
            <Route path="/edit/:id" component={Edit} />
          </Switch>
        </div>
      </Router>
    );
  }
  
}

export default App;
