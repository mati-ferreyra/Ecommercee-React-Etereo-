import { useState } from "react";


const ItemCount = ({stock, initial = 1, onAdd}) => {
    const [count, setCount ] = useState (initial)

    const increment = () => {
        if (count  < stock){
            setCount (prev => prev + 1)
        }

    }

    const decrement = () => {
        if (count  > 1){
            setCount (prev => prev - 1)
        }
    }


return(
    <div className="Counter">
        <div className="Controls">
            <button onClick={decrement}>-</button>
            <h4>{count}</h4>
            <button onClick={increment}>+</button>
        </div>
        <div>
            <button onClick={() => onAdd (count)} disabled={!stock}>
                Agregar Al Carrito
            </button>
        </div>
    </div>
    )
}

export default ItemCount