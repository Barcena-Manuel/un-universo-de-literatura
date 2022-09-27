import { createContext, useState } from "react";


export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const addItem = (item, quantity) => {
        let found = cartList.find(productos => productos.idItem === item.id)
        if (found === undefined) {
            setCartList([
            ...cartList,
            {
                idItem: item.id,
                imgItem: item.img[0],
                tituloItem: item.titulo,
                precioItem: item.precio,
                quantityItem: quantity
            }
        ]);
        }else {
            found.quantityItem += quantity;
        }
    }

    const removeItem = (id) => {
        let result = cartList.filter(item => item.idItem != id);
        setCartList(result);
    }

    const clear = () => {
        setCartList([]);
    }

    const calcTotalPorItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].costItem * cartList[index].quantityItem;
    }

    const calcSubTotal = () => {
        let totalPorItem = cartList.map(item => calcTotalPorItem(item.idItem));
        return totalPorItem.reduce((previoValor, currentValor) => previoValor + currentValor);
    }

    const calcImpuestos = () => calcSubTotal() * 0.21;

    const calcTotal = () => {
        return calcSubTotal();
    }

    const calcItemquantity = () => {
        let quantitys = cartList.map(item => item.quantityItem);
        return quantitys.reduce(((previoValor, currentValor) => previoValor + currentValor), 0);
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