import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import { db } from "../../index"
import CheckOutForm from "../CheckOutForm/CheckOutForm"


const CheckOut = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const {cart, clearCart} = useContext(CartContext);
    let total = 0;

    cart.forEach(item => total += item.price * item.quantity)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)
            console.log(ids);
            const productsRef = collection(db, 'products')

            const queryResultForIds = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const docs = queryResultForIds.docs

            cart.forEach(item => {               

                const dbProduct = docs.find(doc => doc.id === item.id)
                const stockDb = dbProduct.data().stock

                if(stockDb >= item.quantity) {
                    batch.update(dbProduct.ref, {stock: stockDb - item.quantity })
                } else {
                    outOfStock.push(item)
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                let outOfStockNames = outOfStock.map(item => item.name)
                let nameStr = ''
                outOfStockNames.forEach(name => nameStr += ", " + name)
                alert('hay productos que estan fuera de stock: ' + nameStr)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
       return <h1> se esta generando su orden...</h1>
    }

    if(orderId) {
        return <h1>el id de su orden es: {orderId}</h1>
    }

    return (
        <div>
            <h1>Checkout</h1>
            <h2>${total}</h2>
            <CheckOutForm onConfirm={createOrder} />
        </div>
    )
}

export default CheckOut