import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartView = () =>{

    const { cart, total, removeItem } = useCart()
    return (
    <>
            <h1>Carrito</h1>
        <section>
        {
            cart.map(prod =>{
                return(
                <div key={prod.id} className="carrito">
                    <h3>{prod.nombre}</h3>
                    <h4>Cantidad: {prod.quantity} </h4>
                    <h4>Precio por unidad: ${prod.precio}</h4>
                    <h4>Subtotal: ${prod.quantity * prod.precio}</h4>
                    <button onClick={() => removeItem(prod.id) }>Eliminar</button>
                </div>


                )
            })
        }
        </section>
        <section>
            <h2>Total: ${total}</h2>
           </section>
           <Link to="/checkout">
        <button>Comprar</button>
            </Link>
    </>
    )
}


export default CartView