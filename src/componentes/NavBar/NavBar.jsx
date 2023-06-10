import CartImg from '../CartImg/CartImg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'


const NavBar = () => {
  return (
    <header>
        <Navbar>
          <Container>
            <Navbar.Brand href="#home"><h1 className='uni text-center'>Uniformes Escolares Online</h1></Navbar.Brand>
            <Nav className="me-auto ">
              <Nav.Link href="#home">Uniforme Maestra</Nav.Link>
              <Nav.Link href="#features">Uniforme Maestro</Nav.Link>
              <Nav.Link href="#pricing">Uniforme Niña</Nav.Link>
              <Nav.Link href="#pricing">Uniforme Niña</Nav.Link>
              <CartImg />
            </Nav>
          </Container>
        </Navbar>
    </header>
  )
}

export default NavBar