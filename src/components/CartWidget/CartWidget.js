import { useContext } from 'react'
import './CartWidget.css'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'


const CartWidget = () => {
    const { cart } = useContext(CartContext)
    
    return (
        <Link to='/cart' className='CartWidget'>
            <div className='carrito'>
                <p>🛒{cart.length}</p>
            </div>
        </Link>
    )
}

export default CartWidget