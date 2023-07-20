import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'


const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to='/'>
                <img src="//roparevolver.com/cdn/shop/files/logos_cf62876c-8f73-4d43-9b6e-6b4f09ddaf21.png?v=1613579306" className="navbar-toggle">
                </img>
            </Link>
            <div className="categories">
                <NavLink to={`/category/Tienda`} activeClassName="activeOption" className="Option">Tienda</NavLink>
                <NavLink to={`/category/Contacto`} activeClassName="activeOption" className="Option">Contacto</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar