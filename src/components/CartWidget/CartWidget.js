import './CartWidget.css'
import ItemCount from './itemCount'


const CartWidget = () => {
    return (
        <div>
            <div className='carrito'>
                <p>🛒0</p>
            </div>
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("cantidad agregada", quantity)} />
        </div>
    )
}

export default CartWidget