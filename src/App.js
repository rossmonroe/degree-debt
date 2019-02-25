import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import './App.css';

import Header from './components/Header.js';
import Footer from './components/Footer.js';

import StudentDebtCalculator from './pages/StudentDebtCalculator.js';
import Compare from './pages/Compare.js';
import Learn from './pages/Learn.js';
import About from './pages/About.js';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <div class='navigation'>
          <Link class='nav-link' to="/">Student Debt Calculator</Link>
          <Link class='nav-link' to="/Compare">Compare Degrees</Link>
          <Link class='nav-link' to="/Learn">Learn</Link>
          <Link class='nav-link' to="/About">About</Link>
        </div>
        <Header/>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div className="fillParent">
            <Route exact path="/" component={StudentDebtCalculator} />
            <Route path="/compare" component={Compare} />
            <Route path="/learn" component={Learn} />
            <Route path="/about" component={About} />
          </div>
        </BrowserRouter>
        <div className="App-header">
            Learn React
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
