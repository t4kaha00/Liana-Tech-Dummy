import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, NavbarBrand, Nav, Form, FormControl, Button } from 'react-bootstrap';

const Navigation = () => (
  <header className="fixed-top">
    <div className="bg-success fixed-top">
      <Navbar className="float-sm-right" expand="lg">
          <NavLink to='/news' style={{color: 'white'}} className="pr-4">News</NavLink>
          <NavLink to="/" style={{color: 'white'}} className="pr-4">Intranet</NavLink>
          <NavLink>
            <select className="custom-select pr-5 py-0">
              <option selected>In English</option>
              <option>Suomeksi</option>
              <option>På svenska</option>
            </select>
          </NavLink>
      </Navbar>
    </div>

    <Navbar className="mt-5 font-weight-light" expand="lg" style={{backgroundColor: 'white'}}>
      <NavbarBrand>
        <a href="/"><img src="../src/images/liana-logo.jpg" className="ml-5 mt-2" height={40} alt="Liana logo"/></a>
      </NavbarBrand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto font-weight-light">
            <Nav.Link to="/pages/digital-marketing">Company</Nav.Link>
            <Nav.Link>Products</Nav.Link>
            <Nav.Link>Contact us</Nav.Link>
        </Nav>
        <Form inline className="form-inline mr-3 my-auto">
            <FormControl type="text" placeholder="Search" />
            <Button variant="success" className="ml-2 btn-xs">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>

  </header>
)

export default Navigation