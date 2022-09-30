import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Cart = () => {

    const cart = useContext(CartContext)

    return (
        <>
        <div>
            <h2 className="lista__titulo">Tu Carrito</h2>
            <div className="lista__botones">
                <Link to="/"><button type="button" class="btn btn-outline-success lista__botonInt">Seguir Explorando</button></Link>
                <button type="button" className="btn btn-outline-danger lista__eliminar" onClick={cart.clear}>Eliminar Todo</button>
            </div>
        </div>
        <ul className="lista__item">
            {
                cart.cartList.map(productos =>  
                <li className="lista espacio" key={productos.idItem}>
                    <img className="lista__img espacio" src={productos.imgItem} alt={productos.tituloItem}></img>
                    <h4 className="lista__letras espacio">{productos.tituloItem}</h4>
                    <h5 className="lista__letras espacio">{productos.cantidad}/${productos.precioItem}</h5>
                    <h5 className="lista__letras espacio">${cart.calcTotalPorItem(productos.idItem)}</h5>
                    <button type="button" class="btn btn-outline-danger lista__boton espacio" onClick={() => cart.removeItem(productos.idItem)}>Eliminar</button>
                </li>
                )
            }
        <div class="card carta__cuerpo">
            <div class="card-body">
                <h2 class="card-title">Productos en el Carro</h2>
                <div className="carta__letras">
                    <p class="card-text carta__titulos">Subtotal: ${cart.calcImpuestos()}</p>
                    <p class="card-text carta__titulos">Impuestos: ${cart.calcImpuestos()}</p>
                    <h4 class="card-text carta__titulos">Total: ${cart.calcTotal()}</h4>
                    <button type="button" class="btn btn-success">Comprar Producto/s</button>
                </div>
            </div>
        </div>
        </ul>
        </>
    )
}

export default Cart;