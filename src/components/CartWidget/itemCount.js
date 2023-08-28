import { useState } from "react"
import './itemCount.css'


const ItemCount = ({stock, initial, saveToCart}) => {
    const [quantity, setQuantity] = useState (initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(prev => prev + 1);
        }
    }
    
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    }

    return (
        <div className="itemCount">
            <div>
                <button onClick={decrement} className="decrement">-</button>
                <h4>{quantity}</h4>
                <button onClick={increment} className="increment">+</button>
            </div>
            {/*<div>
                <button onClick={() => saveToCart(quantity)} disabled={quantity === 0 || quantity > stock} className="addToCart">
                    agregar al carrito
                </button>
    </div>*/}
        </div>
    )
}

export default ItemCount