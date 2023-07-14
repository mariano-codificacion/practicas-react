import { useState, useEffect } from "react";
//import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import  './ListContainer.css'

//Importamos las nuevas funciones para trabajar con Firebase: 
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../service/config';

const ListContainer = () => {
    const [productos, setProductos] = useState([]);

    const { idCategoria } = useParams();
    
    useEffect( () => {
        const misProductos = idCategoria ? query(collection(db, "productos"),where("idCat", "==", +idCategoria)) : collection(db, "productos");

        getDocs(misProductos)
            .then( res => {
                const nuevosProductos = res.docs.map( doc => {
                    const data = doc.data();
                    return {id: doc.id, ...data}
                })
                setProductos(nuevosProductos);
            })
            .catch(error => console.log(error))
    }, [idCategoria])

    return (
        <div className="cards text-center">
            <h2 className="tit text-center"> Mis Productos </h2>
            <ItemList productos={productos} />
        </div>
    )
}

export default ListContainer