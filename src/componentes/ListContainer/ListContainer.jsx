import { useState, useEffect } from "react";
import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import  './ListContainer.css'

const ListContainer = (props) => {
    const [productos, setProductos] = useState([]);

    const { idCategoria } = useParams();
    
    useEffect(() => {
        const funcion = idCategoria ? getProductosPorCategoria : getProductos;

        funcion(idCategoria)
            .then(res => setProductos(res))

    }, [idCategoria])

    return (
        <div className="cards">
            <h2 className="tit text-center"> {props.greeting} </h2>
            <ItemList productos={productos} />
        </div>
    )
}

export default ListContainer