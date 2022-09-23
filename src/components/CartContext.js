import { createContext, useState } from "react";


export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const addItem = (producto) =>{
        setCartList([
            ...cartList,
            producto
        ])
    }

    const removeItem = (id) => {

    }

    const clear = () => {

    }

    return(
        <CartContext.Provider value={{cartList, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;