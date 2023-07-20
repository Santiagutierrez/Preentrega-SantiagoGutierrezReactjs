import { useEffect, useState } from "react"
import { getProducts, getProductsById } from "../../Mock/asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"



const ItemListContainer = ({ greeting }) => {
    const [products, setProduct] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsById : getProducts

        asyncFunc(categoryId)
        .then(response =>{
            setProduct(response)
        })
        .catch(error => {
            console.error(error);
        })
    }, [categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer