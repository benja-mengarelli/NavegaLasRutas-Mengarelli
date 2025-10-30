import { useContext } from "react";
import cartContext from "../../context/cartContext";
import { createOrder } from "../../data/firebase";
import FormComprador from "./FormComprador";

function CartContainer() {
    const { cartItems, removeItem, clearCart } = useContext(cartContext)


    async function handleCheckout(formData) {
        const orderData = {
            buyer: formData,
            items: cartItems,
            price: 999,
            date: new Date()
        }

        const newOrder = await createOrder(orderData);
        clearCart();
        alert(`Compra realizada con éxito! - tu id de compra es: ${newOrder.id}`)
        // Alternativas a ALERT
        // 1. Toast/sweetalert
        // 2. Renderizado condicional - > setOrderCreated(newOrder.id)
        //    { orderCreated ? "Gracias por tu compra" : ... }
        // 3. Redirigir al usuario /orders/orderid ( getDoc( ordersRef ) )
    }

    // TODO: renderizado condicional cuando el carrito esté vacío

    return (
        <div>
            <h3>Tu carrito</h3>
            <div>
                {
                    cartItems.map(item => <div>
                        <img width="100" src={item.imgURL}></img>
                        <h4>{item.title}</h4>
                        <p>Unidades: {item.count}</p>
                        <p>$ {item.price * item.count}</p>
                        <button onClick={() => removeItem(item.id)}>Quitar del carrito</button>
                    </div>
                    )
                }
            </div>
            <FormComprador handleCheckout={handleCheckout} />
        </div>
    )
}

export default CartContainer;