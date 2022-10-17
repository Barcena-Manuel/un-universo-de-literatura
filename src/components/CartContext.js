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
            const cartFiltrado = cartList.filter(item => item.id !== found.id);
            cartFiltrado.push(found);
            setCartList(cartFiltrado);
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
        return cartList[index].precioItem * cartList[index].cantidadItem;
    }

    const calcSubTotal = () => {
        if(cartList.length > 0){
            let totalPorItem = cartList.map(item => calcTotalPorItem(item.idItem));
        return totalPorItem.reduce((previoValor, proximoValor) => previoValor + proximoValor);
        }else{
            return 0
        }
    }

    const calcImpuestos = () => calcSubTotal() * 0.21;

    const calcTotal = () => calcSubTotal() + calcImpuestos();

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