import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {productId} = useParams()

    useEffect(() =>{    
         const productDocument= doc(db, 'products', productId)
        
        getDoc(productDocument)
        
          .then(queryDocumentSnapshot => {
            const fields = queryDocumentSnapshot.data()
            const productsAdapted = {id: queryDocumentSnapshot.id, ... fields}
            setProduct(productsAdapted)
        })
        .catch(error =>{
            console.error(error)
        })
    }, [productId])
    

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
}


export default ItemDetailContainer