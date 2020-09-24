import React from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Container>
      <Navbar expand="lg">
        <Navbar.Brand href="/">Hellodash</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="Array" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Functions TBA</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Collection" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Functions TBA</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Date" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Functions TBA</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Function" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Functions TBA</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Lang" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Functions TBA</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Math" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Functions TBA</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Methods" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Functions TBA</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Number" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Functions TBA</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Object" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Functions TBA</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Properties" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Functions TBA</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Seq" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Functions TBA</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="String" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Functions TBA</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Util" id="basic-nav-dropdown">
              <NavDropdown.Item href="/util/identity">
                Identity
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
