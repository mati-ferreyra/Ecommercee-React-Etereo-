import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({id, nombre, img, categoria, descripcion, precio, stock})  => {
    
    const handleOnAdd = (quantity) => {
        const objProduct = {
            id,
            nombre,
            quantity,
            precio
        }

        console.log('El producto: ' ,objProduct , ' se agrego correctamente')
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
                    Categoria: {categoria}
                </p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={stock} onAdd={(count) => console.log('Cantidad Agregada' ,)} />
            </footer>
        </article>
    )
}

export default ItemDetail