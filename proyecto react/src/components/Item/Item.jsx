import { Link } from "react-router-dom"


const Item = ({id, nombre, img, precio, stock})  => {
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="NameHeader">{nombre}</h2>
            </header>
           
            <img src={img} alt={nombre} className="ItemImg" />
           
            <section>
                <p className="Info">
                    Precio: ${precio}
                </p>
                <p className="Info">
                    Stock: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/detail/${id}`} className="Option">Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item