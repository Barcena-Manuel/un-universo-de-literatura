import { useState, useEffect } from 'react';
import '../App.css'
import Card from './Card'

const Cards = () => {
    const [data, setData] = useState ([])

    useEffect(() => {
    const dataFromBD = [
        {
            id: 1,
            title: "El Poder de las Palabras",
            thumbnail: "https://contentv2.tap-commerce.com/cover/medium/9789877950465_1.jpg?id_com=1113&w=220",
            description: "Duros inviernos, huracanes más intensos y grandes sequías. Son las consecuencias de La Niña, un fenómeno que se hará notar por segundo año consecutivo."
        },
        {
            id: 2,
            title: "Este dolor no es mio",
            thumbnail: "https://contentv2.tap-commerce.com/cover/medium/9788484456810_1.jpg?id_com=1113&w=220",
            description: "Duros inviernos, huracanes más intensos y grandes sequías. Son las consecuencias de La Niña, un fenómeno que se hará notar por segundo año consecutivo."
        },
        {
            id: 3,
            title: "Isabel Allende",
            thumbnail: "https://contentv2.tap-commerce.com/cover/medium/9789500766647_1.jpg?id_com=1113&w=220",
            description: "Duros inviernos, huracanes más intensos y grandes sequías. Son las consecuencias de La Niña, un fenómeno que se hará notar por segundo año consecutivo."
        },
        {
            id: 4,
            title: "Resetea Tus Intestinos",
            thumbnail: "https://contentv2.tap-commerce.com/cover/medium/9789500212687_1.jpg?id_com=1113&w=220",
            description: "Duros inviernos, huracanes más intensos y grandes sequías. Son las consecuencias de La Niña, un fenómeno que se hará notar por segundo año consecutivo."
        },
        {
            id: 5,
            title: "El Poder del Ahora",
            thumbnail: "https://contentv2.tap-commerce.com/cover/medium/9789877250992_1.jpg?id_com=1113&w=220",
            description: "Duros inviernos, huracanes más intensos y grandes sequías. Son las consecuencias de La Niña, un fenómeno que se hará notar por segundo año consecutivo."
        }
    ];

        setData(dataFromBD);
    }, []);

    return (
        data.map(item => (
            <Card 
            key={0}
            thumbnail={item.thumbnail}
            title={item.title}
            description={item.description}
            stock={item.stock}
            />
        ))
    )
}

export default Cards;