import NavBar from "./componentes/NavBar/NavBar"
import ListContainer from "./componentes/ListContainer/ListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
const App = () => {
  return (
    <>
      <NavBar/>
      <ListContainer greeting={"Bienvenidos a nuestra tienda de Uniformes Escolares"} />
      <ItemDetailContainer/>
    </>

  )
}

export default App


