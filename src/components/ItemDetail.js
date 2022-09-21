import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../App.css';
/* import ItemCount from './ItemCount'; */

const ItemDetail = ({productos}) => {
    const {img, titulo, autor, genero, sinopsis, precio, stock} = productos;

    const [ItemCount, setItemCount] = useState (0);

    const onAdd = (rate) => {
        alert("Añadiste " + rate + " al carrito")
        setItemCount(rate);
    }

    return (
        <section>
                    <div className="info letras">
                        <img src={img} alt="..." className="img"></img>
                        <div className="sinopsis letras__header">
                            <h2 className="titulo">{titulo}</h2>
                            <h4>Autor: {autor}</h4>
                            <h5>Genero: {genero}</h5>
                            <h6>Sinopsis:</h6>
                            <p>{sinopsis}</p>
                            <h5>Precio: {precio}</h5>
                            <h6>Stock del producto: {stock}</h6>
                            {
                                ItemCount === 0
                                ? <ItemCount initial={0} stock={stock} onAdd={onAdd}/>
                                : <Link to="/cart"><button variant="carrito" type="button" class="btn btn-warning">Warning</button></Link>
                            }
                        </div>
                    </div>
        </section>
    )
}

export default ItemDetail;