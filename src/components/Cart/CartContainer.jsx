import { useContext } from "react";
import cartContext from "../../context/cartContext";
import { createOrder } from "../../data/firebase";
import FormComprador from "./FormComprador";

function CartContainer() {
    const { cartItems, removeItem, clearCart } = useContext(cartContext)
    const total = cartItems.reduce((s, i) => s + (i.price * i.count), 0);


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
        <div className="cart-container">
            <h2>Carrito</h2>
            {cartItems.length === 0 ? <p>El carrito está vacío.</p> : (
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img width="100" src={item.imgURL} alt={item.title}></img>
                            <div className="cart-item-info">
                                <h4>{item.title}</h4>
                                <div className="cart-item-controls">
                                    <button onClick={() => removeItem(item.id)}>-</button>
                                    <span className="item-count">{item.count}</span>
                                    <button onClick={() => addToCart({ id: item.id, title: item.title, imgURL: item.imgURL, price: item.price })}>+</button>
                                </div>
                                <p>$ {item.price * item.count}</p>
                                <button onClick={() => removeItemCompleto(item.id)}>Eliminar</button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-summary">
                        <FormComprador handleCheckout={handleCheckout} />
                        <h3>Total: $ {total}</h3>
                        {/* <button onClick={submitCart}>Comprar</button> */}
                    </div>
                </div>
            )}
        </div>
    )
}

export default CartContainer;