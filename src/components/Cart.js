import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {

    const cart = useContext(CartContext)

    return (
        <>
        <h2>Carrito</h2>
        <ul>
            {
                cart.cartList.map(productos => 
                <li key={productos.id}>
                    <img alt="...">{productos.img}</img>
                    <h4>{productos.titulo}</h4>
                    <p>{productos.precio}</p>
                    <button onClick={cart.removeItem}>Eliminar</button>
                </li>)
            }
        </ul>
        </>
    )
}

export default Cart;