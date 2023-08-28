import { useEffect, useState } from "react"
import { getProductsById } from "../../Mock/asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc, collection, getDocs } from "firebase/firestore"
import { db } from "../../index"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
          const ref = doc(db, "products", itemId)
          const document = await getDoc(ref);
          const item = {... document.data(), id: document.id};
          setProduct(item);
          setLoading(false);
        };
        fetchData();
      }, [itemId]);

    // useEffect(() => {
    //     setLoading(true);
        
    //     getProductsById(itemId) // Usar la función getProductsById
    //         .then(response => {
    //             setProduct(response);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         })
    //         .finally(() => {
    //             setLoading(false);
    //         });
    // }, [itemId]);
    
    return loading ? 
      (<div>LOADING...</div>)  
    : ( <div><ItemDetail {...product} /></div>)
}

export default ItemDetailContainer
