import { useEffect, useState } from "react"
import { getProducts, getProductsById } from "../../Mock/asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { query, getDocs, where, collection } from "firebase/firestore"
import { db } from "../../index"



const ItemListContainer = ({ greeting }) => {
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection (db, 'products')

        getDocs(collectionRef)
            .then(response =>{
                const productsAdapted = response.docs.map(doc =>{
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProduct(productsAdapted)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
            })

            const fetchProducts = categoryId ? getProductsById : getProducts;

            fetchProducts() 
                .then(response => {
                    setProduct(response);
                })
                .catch(error => {
                    console.error(error);
                });
        }, [categoryId]);

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer