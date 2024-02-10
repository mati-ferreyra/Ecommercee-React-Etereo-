import cart from "./assets/cart.svg" 
import { useCart } from "../../context/CartContext"

const CartWidget = () => {
    const { totalQuantity } = useCart()
    return (
        <div>
            <img src={cart} alt="cart" />
            {totalQuantity}
        </div>
    )
}

export default CartWidget