import { useState, useEffect } from "react";
import { getProductos } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import  './ListContainer.css'

const ListContainer = (props) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProductos()
            .then(respuesta => setProductos(respuesta))
            .catch(error => console.log(error))

    }, [])
    return (
        <div className="cards">
            <h2 className="tit text-center"> {props.greeting} </h2>
            <ItemList productos={productos} />
        </div>
    )
}

export default ListContainer