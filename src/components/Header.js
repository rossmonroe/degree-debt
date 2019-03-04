import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import '../style/css/Global.css';


class Header extends Component {
  render() {
    return (
      <div className='header'>
      <div className="header-content">
        <Navbar expand="md">
        <Navbar.Brand href="#home"><div id='top-logo'></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link><Link className='nav-link' to= '/'>Student Debt Calculator</Link></Nav.Link>
            <Nav.Link><Link className='nav-link' to="/learn">Learn</Link></Nav.Link>
            <Nav.Link><Link className='nav-link' to="/about">About</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
      <div id="header-title">
        <h1>Learn how your degree choice <br/>affects your financial future.</h1>
        <a href="#calculator"><div className='button header-button'>Get Started!</div></a>
      </div>
      </div>
    );
  }
}

export default (Header);