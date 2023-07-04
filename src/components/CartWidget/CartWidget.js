import './CartWidget.css'

const CartWidget = () => {
    return (
        <div>
            <div className='carrito'>
                <p>🛒0</p>
            </div>
            <button className='carrito-agregar'>Sumar al carrito</button>
        </div>
    )
}

export default CartWidget