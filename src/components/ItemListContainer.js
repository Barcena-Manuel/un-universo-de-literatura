import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import '../App.css'
import ItemList from './ItemList'
import { db } from '../utils/firebaseConfig'

const ItemListContainer = () => {
    const [productos, setProductos] = useState ([])
    const { id } = useParams();

    // promesa para las cartas
    const firestoreFetch = async (id) => {
        let q;
        if (id) {
            q = query(collection(db, "productos"), where("categoryId", "==", id))
        }else {
            q = query(collection(db, "productos"), orderBy("titulo"))
        }
        const querySnapshot = await getDocs(q);
        const dataFromFirestore = querySnapshot.docs.map(item => ({
            id: item.id,
            ...item.data()
        }))
        return dataFromFirestore;
    }
    useEffect(() => {
        firestoreFetch(id)
        .then(result => setProductos(result))
        .catch(err => console.log(err))
    }, [id]);

    return(
        <main>
            <ItemList productos={productos}/>
        </main>
    )
}

export default ItemListContainer;