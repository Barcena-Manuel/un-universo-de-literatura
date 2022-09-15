import { useState, useEffect } from 'react';
import '../App.css'
import customFetch from '../utils/CustomFetch'
import ItemDetail from './ItemDetail'
import dataFromBD from '../utils/Data'

const ItemDetailContainer = () => {
    const [item, setData] = useState ({})
    // promesa para las cartas
    useEffect(() => {
        customFetch (2000, dataFromBD[4])
            .then(datos => setData(datos))
            .catch(err => console.log(err))
    }, []);

    return(
        <main>
            <ItemDetail productos={item}/>
        </main>
    )
}

export default ItemDetailContainer;