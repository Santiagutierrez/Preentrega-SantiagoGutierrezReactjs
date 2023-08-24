import { useContext } from 'react'
import './CartWidget.css'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    
    return (
        <Link to='/cart' className='CartWidget'>
            <div className='carrito'>
                <p>🛒0</p>
            </div>
        </Link>
    )
}

export default CartWidget