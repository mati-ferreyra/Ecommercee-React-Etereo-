import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { db } from "../../services/firebase/firebaseConfig"
import { getDocs, collection, where, query } from "firebase/firestore"
import Swal from 'sweetalert2'



const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()
    


    useEffect(() =>  {



    const productsCollection = categoryId
    ? query(collection(db, 'products'), where('category', '==', categoryId))
    : collection(db, 'products')
    

    getDocs(productsCollection)
        .then(querySnapshot =>  {
            const productsAdapted = querySnapshot.docs.map(doc => {
                const fields = doc.data()
                return {id: doc.id, ...fields}
            })
            setProducts(productsAdapted)

            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Hubo un error",
                    
                  });
            })
        })


}, [categoryId] )
    
    
    
    
    
    
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )

} 

  
    
 
    

export default ItemListContainer