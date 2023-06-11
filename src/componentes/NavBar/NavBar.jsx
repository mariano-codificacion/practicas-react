import CartImg from '../CartImg/CartImg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container className='color'>
        <Navbar.Brand href="#home"><h1 className='uni'> Uniformes Escolares </h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <NavDropdown title="Uniformes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Maestros</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Niña
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Niño</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartImg/>
      </Container>
    </Navbar>
  )
}

export default NavBar