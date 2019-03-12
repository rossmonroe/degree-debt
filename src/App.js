import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header.js';
import Footer from './components/Footer.js';

import StudentDebtCalculator from './pages/StudentDebtCalculator.js';
import Results from './pages/Results.js';
import Learn from './pages/Learn.js';
import About from './pages/About.js';

class App extends Component {
  render() {
    return (

      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div className="fillParent">
            <Header />
            <Route exact path="/" component={StudentDebtCalculator} />
            <Route path="/results" component={Results} />
            <Route path="/learn" component={Learn} />
            <Route path="/about" component={About} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
