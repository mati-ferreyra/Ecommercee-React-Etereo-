import { useCart } from "../../context/CartContext";
import { db } from "../../services/firebase/firebaseConfig";
import CheckoutForm from "../CheckOutForm/CheckOutForm";
import { useState } from "react";


const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const { cart, total, clearCart } = useCart()

    const createOrder = async () => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: { 
                    name: '',
                    email: '',
                    phone: ''
                },
                items: cart,
                total 
            }
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            const ids = cart.map(prod => prod.id)
            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))
    
            // getDocs(productsCollection).then(querySnapshot => {})
            const querySnapshot = await getDocs(productsCollection)
            const { docs } = querySnapshot
            
            docs.forEach(doc => {
                const fields = doc.data()
                const stockDb = fields.stock
    
                const productsAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productsAddedToCart.quantity
                console.log(stockDb >= prodQuantity)
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...fields})
                }
            })
    
            if(outOfStock.length === 0) {
                batch.commit()
    
                const orderCollection = collection(db, 'orders')
                const { id } = await addDoc(orderCollection, objOrder)
                
                setOrderId(id)

                clearCart()
            } else {
                console.error('error', 'Hay productos que no tienen stock disponible')
            }
        } catch (error) {
            console.error('error', 'Hubo un error al crear la orden')
        } finally {
            setLoading(false)
        }
        
    }


    if(orderId) {
        return <h1>El id de su compra es: {orderId}</h1>
    }
  

  
    return (
      <>
        <h1>CHECKOUT</h1>
        <CheckoutForm createOrder={createOrder} />
      </>
    );
  };
  
  export default Checkout;