import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";

const MyNavbar = () => {
  return (
    <div id="my-navbar">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <Image src="favicon.ico" className="home-icon" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                className="category"
                title="Category"
                id="responsive-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">TOEIC</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">IELTS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">OTHERS</NavDropdown.Item>
              </NavDropdown>
              <Button variant="outline-dark" className="search-btn">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
              <input
                className="search-input"
                placeholder="Search for anything"
                type="text"
              />
            </Nav>
            <Nav>
              <Nav.Link className="my-learning" href="#">
                Courses
              </Nav.Link>
              <Nav.Link href="#">
                <FontAwesomeIcon
                  className="profile-icon"
                  icon={faUserCircle}
                  size="2x"
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
