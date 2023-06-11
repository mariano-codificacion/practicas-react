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
          <div className='row'>
            <Nav className='col-xxl-12 col-xl-12 col-md-6 col-xs-2 col-1 text-center'>
              <Navbar.Brand href="#home"><h1 className='uni'>Uniformes Escolares</h1></Navbar.Brand>
              <Nav.Link href="#home">Uniforme Maestra</Nav.Link>
              <Nav.Link href="#features">Uniforme Maestro</Nav.Link>
              <Nav.Link href="#pricing">Uniforme Niña</Nav.Link>
              <Nav.Link href="#pricing">Uniforme Niño</Nav.Link>
              <CartImg />
            </Nav>
          </div>
        </Container>
      </Navbar>
    </header>
  )
}

export default NavBar