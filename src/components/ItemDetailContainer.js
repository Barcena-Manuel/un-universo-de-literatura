import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css'
import customFetch from '../utils/CustomFetch'
import ItemDetail from './ItemDetail'
import dataFromBD from '../utils/Data'


const ItemDetailContainer = () => {
    const [item, setData] = useState ({})
    const { id } = useParams();

    // promesa para las cartas
    useEffect(() => {
            customFetch (2000, dataFromBD.find(item => item.id === id))
            .then(datos => setData(datos))
            .catch(err => console.log(err))
    }, [id]);

    return(
        <main>
            <ItemDetail productos={item}/>
        </main>
    )
}

export default ItemDetailContainer;