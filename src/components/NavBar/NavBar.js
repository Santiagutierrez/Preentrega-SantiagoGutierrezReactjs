import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'


const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-toggle">
                NavBar
            </div>
            <div>
                <button>Zapatillas</button>
                <button>Zapatos</button>
                <button>Sandalias</button>
                <button>Medias</button>
                <CartWidget />
            </div>
        </nav>

    )
}

export default NavBar