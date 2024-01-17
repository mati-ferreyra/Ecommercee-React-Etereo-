import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Link to='/'>
            <h2>Etereo Clothing</h2>
            </Link>
            
            <div className='Categorias'>
                <NavLink to={`categoria/Remeras`} >Remeras</NavLink>
                <NavLink to={`categoria/Short`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Shorts</NavLink>
                <NavLink to={`categoria/Musculosas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Musculosas</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar