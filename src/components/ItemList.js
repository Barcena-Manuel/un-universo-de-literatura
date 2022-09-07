import { useState, useEffect } from 'react';
import '../App.css'
import Item from './Item'
import customFetch from '../utils/CustomFetch'
import dataFromBD from '../utils/Data'

const ItemList = () => {
    const [data, setData] = useState ([])

// promesa para las cartas
    useEffect(() => {
        customFetch(2000, dataFromBD)
            .then(datos => setData(dataFromBD))
    }, []);

    return (
        <>
        {
            data.length ?
            data.map(item => (
                <Item
                    key={item.id}
                    thumbnail={item.thumbnail}
                    title={item.title}
                    description={item.description}
                    stock={item.stock}
                />
            ))
            : <p>
                <button class="btn btn-primary" type="button" disabled>
                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                <span class="visually-hidden">Loading...</span>
                </button>
                <button class="btn btn-primary" type="button" disabled>
                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                Loading...
                </button>
            </p>
        }
        </>
        
    )
}

export default ItemList;