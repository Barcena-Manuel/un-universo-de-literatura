import { useContext } from 'react'
import { Badge } from '@mui/material'
import { ShoppingCartOutlined } from "@mui/icons-material"
import { CartContext } from './CartContext'

// icono de carrito
const CartWidget = () => {
    const {calcItemquantity} = useContext(CartContext);
    return (
        <Badge badgeContent={calcItemquantity()} color="secondary">
            <ShoppingCartOutlined />
        </Badge>
    );
}

export default CartWidget;