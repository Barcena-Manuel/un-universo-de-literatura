import { createContext, useState } from "react";


export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const addItem = (item, cantidad) => {
        let found = cartList.find(productos => productos.idItem === item.id)
        if (found === undefined) {
            setCartList([
            ...cartList,
            {
                idItem: item.id,
                imgItem: item.img,
                tituloItem: item.titulo,
                precioItem: item.precio,
                cantidadItem: cantidad
            }
        ]);
        }else {
            found.cantidadItem += cantidad;
        }
    }

    const removeItem = (id) => {
        let result = cartList.filter(item => item.idItem !== id);
        setCartList(result);
    }

    const clear = () => {
        setCartList([]);
    }

    const calcTotalPorItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].costItem * cartList[index].cantidadItem;
    }

    const calcSubTotal = () => {
        let totalPorItem = cartList.map(item => calcTotalPorItem(item.idItem));
        return totalPorItem.reduce((previoValor, proximoValor) => previoValor + proximoValor);
    }

    const calcImpuestos = () => calcSubTotal() * 0.21;

    const calcTotal = () => {
        return calcSubTotal();
    }

    const calcItemquantity = () => {
        let cantidades = cartList.map(item => item.cantidadItem);
        return cantidades.reduce(((previoValor, proximoValor) => previoValor + proximoValor), 0);
    }

    return(
        <CartContext.Provider value={{
            cartList, 
            addItem, 
            removeItem, 
            clear, 
            calcTotalPorItem, 
            calcSubTotal,
            calcImpuestos,
            calcTotal,
            calcItemquantity
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;