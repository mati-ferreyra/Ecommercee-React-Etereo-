import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
    return (
        <nav>
            <h2>Etereo Clothing</h2>
            <div>
                <button>Inicio</button>
                <button>Productos</button>
                <button>Nosotros</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar