import CartImg from '../CartImg/CartImg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'
//[Tutor] Nico Smael:	Para los que usan Bootstrap , los tienen que transformar a Link o Navlink con la propiedad as <Nav.Link as={Link} to="/tuCategoria">Nombre Categoria</Nav.Link>

const NavBar = () => {
  return (
    <Navbar bg="red" expand="lg">
      <Container className='color'>
        <Nav.Link as={NavLink} to="/#HOME"><h1 className='uni'> UNIFORMES ESCOLARES </h1></Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/#HOME">HOME</Nav.Link>
            <NavDropdown title="UNIFORMES" id="basic-nav-dropdown">
              <Nav.Link as={Link} to="/categoria/1">Maestros</Nav.Link>
              <Nav.Link as={Link} to="/categoria/2">Niña</Nav.Link>
              <Nav.Link as={Link }to="/categoria/3">Niño</Nav.Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartImg/>
      </Container>
    </Navbar>
  )
}

export default NavBar