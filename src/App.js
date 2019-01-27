import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home.js'
import Contact from './Contact.js'
import Work from './Work.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <h2 className="my-name">Evan</h2>
            <div className="links">
              <Link to="/" className="squiggle-hover-black">Home</Link>
              <Link to="/work" className="squiggle-hover-black">Work</Link>
              <Link to="/contact" className="squiggle-hover-black">Contact</Link>
            </div>
          </nav>
            <Route path="/" exact component={ Home } />
            <Route path="/work" component={ Work } />
            <Route path="/contact" component={ Contact } />
        </div>
      </Router>
    );
  }
}

export default App;
