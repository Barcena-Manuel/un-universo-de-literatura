import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { serverTimestamp, doc, setDoc, collection } from "firebase/firestore";
import { db } from "../utils/firebaseConfig"


const Cart = () => {

    const cart = useContext(CartContext);

    const createOrder = async () => {
        let itemForDB = cart.cartList.map(item => ({
            id: item.idItem,
            title: item.tituloItem,
            price: item.precioItem,
            quantity: item.cantidadItem,
        }))
        let order = {
            buyer : {
                name: "manuel",
                phone: "1144124434",
                email: "manuel.123@gmial.com"
            },
            date: serverTimestamp(),
            items: itemForDB,
            total: cart.calcTotal(),
        }
        const newOrderRef = doc(collection(db, "order"))
        await setDoc(newOrderRef, order);
        alert("Tu orden tiene de numero de ID " + newOrderRef.id)
        cart.clear()
    }

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
                        <h5 className="lista__letras espacio">{productos.cantidadItem}/${productos.precioItem}</h5>
                        <h5 className="lista__letras espacio">${cart.calcTotalPorItem(productos.idItem)}</h5>
                        <button type="button" class="btn btn-outline-danger lista__boton espacio" onClick={() => cart.removeItem(productos.idItem)}>Eliminar</button>
                    </li>
                )
            }
        </ul>
        {
            cart.calcItemquantity() > 0
            ? <div class="card carta__cuerpo">
                <div class="card-body">
                    <h2 class="card-title">Productos en el Carro</h2>
                    <div className="carta__letras">
                        <p class="card-text carta__titulos">Subtotal: ${cart.calcSubTotal()}</p>
                        <p class="card-text carta__titulos">Impuestos: ${cart.calcImpuestos()}</p>
                        <h4 class="card-text carta__titulos">Total: ${cart.calcTotal()}</h4>
                        <button type="button" class="btn btn-success" onClick={createOrder}>Comprar Producto/s</button>
                    </div>
                </div>
            </div>
            : <div class="card carta__cuerpo">
            <div class="card-body">
                <h2 class="lista__titulo">No hay productos en el Carrito</h2>
            </div>
        </div>
        }
        </>
    )
}

export default Cart;