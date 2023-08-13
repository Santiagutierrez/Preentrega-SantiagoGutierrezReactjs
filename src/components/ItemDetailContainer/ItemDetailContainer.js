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
          const querySnapshot = await getDocs(collection(db, "products"));
          const newData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setProduct(newData);
          setLoading(false);
        };
        fetchData();
      }, [itemId]);
    
      const itemSelected = !loading
        ? product.filter((item) => parseInt(item.id) === parseInt(itemId))
        : "";

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
    
    return (
        <div>
            <ItemDetail itemSelected={itemSelected} />
        </div>
    )
}

export default ItemDetailContainer
