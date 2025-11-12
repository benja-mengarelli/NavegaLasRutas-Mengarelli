import { createContext, useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const cartContext = createContext();

export function CartProvider(props) {
    const [cartItems, setCartItems] = useState([]);

    function addToCart(newItem) {
        const newCartItems = structuredClone(cartItems);

        const isInCart = cartItems.some(item => item.id === newItem.id)

        if (isInCart) {
            // Actualizamos producto del carrito
            const index = cartItems.findIndex(item => item.id === newItem.id);
            newCartItems[index].count = newCartItems[index].count + 1
        }
        else {
            // Agregar al carrito
            newCartItems.push({ ...newItem, count: 1 });
        }

        setCartItems(newCartItems)
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: `Agregaste "${newItem.title}" al carrito`,
            showConfirmButton: false,
            timer: 1400,
            timerProgressBar: true
        });
    }

    function removeItem(idRemove) {
        let newCartItems = structuredClone(cartItems)

        const isInCart = cartItems.find(item => item.id === idRemove)
        const countInCart = isInCart.count;
        if (countInCart > 1) {
            const index = cartItems.findIndex(item => item.id === idRemove);
            newCartItems[index].count--;
        }
        else {
            newCartItems = cartItems.filter(item => item.id !== idRemove)
        }


        setCartItems(newCartItems);
    }

    function removeItemCompleto(idRemove) {
        const newCart = cartItems.filter(item => item.id !== idRemove)
        setCartItems(newCart)
    }

    function countItems() {
        let count = 0;
        cartItems.forEach(item => count += item.count)
        return count;
    }

    function submitCart() {
        if (cartItems.length === 0) {
            Swal.fire({ icon: 'info', title: 'Carrito vacío', text: 'Agrega productos antes de comprar.'});
            return;
        }
        const total = cartItems.reduce((s, i) => s + (i.price * i.count), 0);
        Swal.fire({
            icon: 'success',
            title: 'Compra realizada',
            html: `<p>Gracias por tu compra.</p><p>Total: $ ${total}</p>`
        });
        setCartItems([]);
    }

    // function calculateTotalPrice(){}

    function clearCart() {
        setCartItems([])
    }

    return (
        <cartContext.Provider value={{
            cartItems,
            addToCart,
            removeItemCompleto,
            countItems,
            removeItem,
            clearCart,
            submitCart
        }}>
            {props.children}
        </cartContext.Provider>
    )
}

export default cartContext;