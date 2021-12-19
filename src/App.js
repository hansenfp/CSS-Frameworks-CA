import React from "react";
import './sass/style.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Home from "./pages/Home";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="wrapper">
        <Router>
          <nav>
            <div className="container">
            <Container>
            <Navbar expand="lg">
            <Navbar.Brand href="/">The Yay Company</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="nav-link" href="/">Home</Nav.Link>
                <Nav.Link className="nav-link" href="/news">News</Nav.Link>
                <Nav.Link className="nav-link" href="/contact">Contact</Nav.Link>
              </Nav>
              <div className="search-container">
                    <input type="text" placeholder="Search"></input>
                    <button type="submit">GO</button>
                  </div>
            </Navbar.Collapse>
            </Navbar>
            </Container>
          
    
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            </div>
          </nav>
        </Router>
        </div>
      <Footer />
    </>
  );
}

export default App;