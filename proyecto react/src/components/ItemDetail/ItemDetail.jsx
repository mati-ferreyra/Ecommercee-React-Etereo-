import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import Swal from 'sweetalert2'



const ItemDetail = ({id, nombre, img, category, descripcion, precio, stock})  => {

    const [quantity, setQuantity] = useState(0)

    const {addItem} = useCart()

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, nombre, precio, quantity
        }
        console.log(objProductToAdd)
        addItem(objProductToAdd)
        Swal.fire({
            icon: "success",
            title: `Se agregaron correctamente ${quantity} ${nombre}`,
          });
        setQuantity(quantity)
        
    }


    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="NameHeader">{nombre}</h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Precio: ${precio}
                </p>
                <p className="Info">
                    Stock: {stock}
                </p>
                <p className='descripcion'>
                    {descripcion}
                </p>
                <p className='Categoria'>
                    Categoria: {category}
                </p>
            </section>
            <footer className="ItemFooter">
                
             {  quantity > 0 ? (
                    <Link to='/cart'>Finalizar compra</Link>
                ) : (<ItemCount initial={1} stock={stock} onAdd={(handleOnAdd)} />)
                    }
              
            </footer>
        </article>
    
      ) 
                
}

export default ItemDetail