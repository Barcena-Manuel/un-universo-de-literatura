import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import '../App.css'
import ItemDetail from './ItemDetail'
import { db } from '../utils/firebaseConfig'

const ItemDetailContainer = () => {
    const [item, setData] = useState ({})
    const { id } = useParams();

    const firestoreFetch = async (id) => {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return {
                id: item.id,
                ...docSnap.data()
            }
        } else {
            console.log("No such document!");
        }
    }
    // promesa para las cartas
    useEffect( () => {
        firestoreFetch(id)
        .then(result => setData(result))
        .catch(err => console.log(err))
    }, [id]);

    return(
        <main>
            <ItemDetail productos={item}/>
        </main>
    )
}

export default ItemDetailContainer;