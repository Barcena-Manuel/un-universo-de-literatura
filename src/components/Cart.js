import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {

    const cart = useContext(CartContext)

    return (
        <>
        <div className="lista__div">
            <h2 className="lista__titulo">Carrito</h2>
        <button type="button" className="btn btn-outline-danger lista__eliminar" onClick={cart.clear}>Eliminar Todo</button>
        </div>
        <ul>
            {
                cart.cartList.map(productos => 
                <li className="lista espacio" key={productos.id}>
                    <img className="lista__img espacio" src={productos.img} alt={productos.titulo}></img>
                    <h4 className="lista__letras espacio">{productos.titulo}</h4>
                    <p className="lista__letras espacio">{productos.precio}</p>
                    <button type="button" class="btn btn-outline-danger lista__boton espacio" onClick={cart.removeItem}>Eliminar</button>
                </li>)
            }
        </ul>
        </>
    )
}

export default Cart;