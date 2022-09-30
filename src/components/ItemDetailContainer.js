import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import '../App.css'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
    const [item, setData] = useState ({})
    const { id } = useParams();

    // promesa para las cartas
    useEffect(async () => {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return {
                id: idItem,
                ...docSnap.data()
            }
        } else {
            console.log("No such document!");
        }
        setData(docRef)
    }, [id]);

    return(
        <main>
            <ItemDetail productos={item}/>
        </main>
    )
}

export default ItemDetailContainer;