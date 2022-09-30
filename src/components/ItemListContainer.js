import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, orderBy, where, collection } from "firebase/firestore";
import '../App.css'
import ItemList from './ItemList'
import { db } from '../utils/firebaseConfig'

const ItemListContainer = () => {
    const [productos, setProductos] = useState ([])
    const { id } = useParams();

    // promesa para las cartas
    useEffect(async () => {
        let q;
        if (id) {
            q = query(collection(db, "productos"), where("categoryOd", "==", id))
        }else {
            q = query(collection(db, "productos"), orderBy("titulo"))
        }
        const querySnapshot = await getDocs(collection(db, "productos"));
        const dataFromFirestore = querySnapshot.docs.map(item => ({
            id: item.id,
            ...item.data()
        }))
        setProductos(dataFromFirestore)
    }, [id]);

    return(
        <main>
            <ItemList productos={productos}/>
        </main>
    )
}

export default ItemListContainer;