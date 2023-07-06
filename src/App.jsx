import NavBar from './componentes/NavBar/NavBar';
import ListContainer from './componentes/ListContainer/ListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import Cart from './componentes/Cart/Cart';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ListContainer />} />
            <Route path="/categoria/:idCategoria" element={<ListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<h2>Muy Pronto tendrás tu checkout!!</h2>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App


