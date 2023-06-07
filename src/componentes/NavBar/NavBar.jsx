import CartImg from '../CartImg/CartImg'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h1 className='uni'>Uniformes Escolares Online</h1>
        <nav>
            <ul>
                <li>Uniforme Maestra</li>
                <li>Uniforme Maestro</li>
                <li>Uniforme Niña</li>
                <li>Uniforme Niño</li>
            </ul>
        </nav>

        <CartImg/>
    </header>
  )
}

export default NavBar