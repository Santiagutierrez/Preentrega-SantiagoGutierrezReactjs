import { useEffect, useState } from "react"
import { getProducts } from "../../Mock/asyncMock"
import ItemList from "../ItemList/ItemList"



const ItemListContainer = ({ greeting }) => {
    const [products, setProduct] = useState ([])

    useEffect (() => {
        getProducts()
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer