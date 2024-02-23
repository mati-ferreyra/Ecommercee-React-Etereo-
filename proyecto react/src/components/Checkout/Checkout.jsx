import { useCart } from "../../context/CartContext";
import OrderForm from "../OrderForm/OrderForm";
import { db } from "../../services/firebase/firebaseConfig";
import { collection, getDocs, where, query, documentId, writeBatch, addDoc } from "firebase/firestore";
import { useState } from "react";
import Swal from 'sweetalert2'


const CheckOut = () => {
    const [orderId, setOrderId] = useState(null)
    const { cart, total } = useCart()

    const createOrder = async (userData) => {
        try {
            const objOrder = {
                buyer: userData,
                items: cart,
                total
            }

            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))

            const querySnapshot = await getDocs(productsCollection)
            const { docs } = querySnapshot

            docs.forEach(doc => {
                const fields = doc.data()
                const stockDb = fields.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...fields })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderCollection = collection(db, 'orders')

                const { id } = await addDoc(orderCollection, objOrder)
                setOrderId(id)
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Hay productos que no tienen stock disponible",
                  });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Lo sentimos",
                text: "Hubo un error al crear la orden",
               
              });
        }
    }

    if (orderId) {
        return <h2>El id de su orden es: {orderId}</h2>
    }

    return (
        <>
            <h1>Checkout</h1>
            <OrderForm createOrder={createOrder} />
        </>
    );
}

export default CheckOut;