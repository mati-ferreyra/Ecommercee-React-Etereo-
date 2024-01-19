import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Link to='/'>
            <h2>Etereo Clothing</h2>
            </Link>
            
            <div className='Categorias'>
                <Link to={'category/remeras'} >Remeras</Link>
                <Link to={'category/shorts'}>Shorts</Link>
                <Link to={'category/musculosas'} >Musculosas</Link>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar