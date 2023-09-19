import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { useState } from "react"


const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMouseEnter = () => {
        setMenuOpen(true);
      };
    
      const handleMouseLeave = () => {
        setMenuOpen(false);
      };

    return (
        <nav className="navbar">
            <Link to='/'>
                <img src="//roparevolver.com/cdn/shop/files/logos_cf62876c-8f73-4d43-9b6e-6b4f09ddaf21.png?v=1613579306" className="navbar-toggle">
                </img>
            </Link>
            <div className="categories-tienda" onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
                <NavLink to='/'  className="tienda">Tienda</NavLink>
                {menuOpen && (
                    <div className={`menu-dropdown ${menuOpen ? "open" : ""}`}>
                    <NavLink to="/category/REMERAS" className="category-remeras">
                        Remeras
                    </NavLink>
                    <NavLink to="/category/PANTALONES" className="category-pantalones">
                        Pantalones
                    </NavLink>
                    <NavLink to="/category/BUZOS" className="category-buzos">
                        Buzos
                    </NavLink>
                    <NavLink to="/category/ABRIGOS" className="category-abrigos">
                        Abrigos
                    </NavLink>
                </div>
                )}
                {/* <NavLink to='/'  className="tienda">Tienda</NavLink> */}
            </div>
            <div className="categories-contacto">
                <NavLink to='/contacto' className="contacto">Contacto</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar