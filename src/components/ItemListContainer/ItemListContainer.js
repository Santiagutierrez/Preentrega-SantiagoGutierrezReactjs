import { useEffect, useState } from "react"
//import { getProducts, getProductsById } from "../../Mock/asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { query, addDoc, getDocs, where, collection, doc } from "firebase/firestore"
import { db } from "../../index"



const ItemListContainer = ({ greeting }) => {
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams();


//CODIGO para agregar un item a la base de datos
// useEffect(() => {
  
//     addDoc(collection(db, 'products'), {id:"1234",name:"sarasa"})
//         .then((docRef) => {
//             console.log("Document written with ID: ", docRef.id);
//         })
//         .catch((error) => {
//             console.error("Error adding document: ", error);
//         });   
// }, [])


    useEffect(() => {
        setLoading(true);

        //ternary operator
        const collectionRef = categoryId ? 
            query(collection(db, 'products'), where('category', '==', categoryId)) 
            : collection(db, 'products');

        console.log("Fetching Data from DB! with category id: " + categoryId);

        getDocs(collectionRef).then(result => {
       

            const productsAdapted = result.docs.map((doc) => ({...doc.data(), id: doc.id}));
            setProduct(productsAdapted);           
            console.log(productsAdapted);
            setLoading(false)
        }).catch(err => console.error("explotó el fetch: " + err));

        // const fetchProducts = categoryId ? getProductsById : getProducts;

        // fetchProducts() 
        //     .then(response => {
        //         setProduct(response);
        //     })
        //     .catch(error => {
        //         console.error(error);
        //     });
    }, [categoryId]);

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer