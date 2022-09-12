import { useState, useEffect } from 'react';
import '../App.css'
import customFetch from '../utils/CustomFetch'
import ItemList from './ItemList'
import dataFromBD from '../utils/Data'

const ItemListContainer = () => {
    const [productos, setProductos] = useState ([])
    // promesa para las cartas
    useEffect(() => {
        customFetch (2000, dataFromBD)
            .then(datos => setProductos(dataFromBD))
            .catch(dato => console.log(dato))
    }, []);

    return(
        <main>
            <ItemList productos={productos}/>
        </main>
    )
}

export default ItemListContainer;