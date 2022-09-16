import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css'
import customFetch from '../utils/CustomFetch'
import ItemList from './ItemList'
import dataFromBD from '../utils/Data'

const ItemListContainer = () => {
    const [productos, setProductos] = useState ([])
    const { id } = useParams();

    // promesa para las cartas
    useEffect(() => {
        if(id) {
            customFetch (2000, dataFromBD.filter(item => item.categoryId === id))
                .then(datos => setProductos(datos))
                .catch(err => console.log(err))
        }else{ 
            customFetch (2000, dataFromBD)
                .then(datos => setProductos(datos))
                .catch(err => console.log(err))
        }
    }, [id]);

    return(
        <main>
            <ItemList productos={productos}/>
        </main>
    )
}

export default ItemListContainer;