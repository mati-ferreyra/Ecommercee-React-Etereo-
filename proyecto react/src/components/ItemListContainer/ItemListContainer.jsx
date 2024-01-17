import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()
    
    useEffect(() =>  {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
        .then(products => {
            setProducts(products)
        })
        .cath(error => {
            console.error(error)
        })
    }, [categoryId])   
    
    
    
    
    
    
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )

} 

  
    
 
    

export default ItemListContainer