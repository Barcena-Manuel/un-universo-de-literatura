import { Badge } from '@mui/material'
import { ShoppingCartOutlined } from "@mui/icons-material"

// icono de carrito
const CartWidget = () => {
    return (
        <Badge badgeContent={3} color="secondary">
            <ShoppingCartOutlined />
        </Badge>
    );
}

export default CartWidget;