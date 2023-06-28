import NavBar from "./componentes/NavBar/NavBar"
import ListContainer from "./componentes/ListContainer/ListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ListContainer />} />
          <Route path="/categoria/:idCategoria" element={<ListContainer />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          <Route path="*" element={<h2>Sitio en construcción</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


