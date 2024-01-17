import { useState } from "react";


const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity ] = useState (initial)

    const increment = () => {
        if (quantity  < stock){
            setQuantity (quantity+1)
        }

    }

    const decrement = () => {
        if (quantity  > stock){
            setQuantity (quantity-1)
        }
    }


return(
    <div className="Counter">
        <div className="Controls">
            <button onClick={decrement}>-</button>
            <h4>{quantity}</h4>
            <button onClick={increment}>+</button>
        </div>
        <div>
            <button onClick={() => onAdd (quantity)} disabled={!stock}>
                Agregar Al Carrito
            </button>
        </div>
    </div>
    )
}

export default ItemCount