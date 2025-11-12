import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import cartContext from "../../context/cartContext";
import './Card.css'

/*Se deconstruye la prop mandada */
function Item({ id, title, imgURL, price, category }) {
    const { addToCart, removeItem, cartItems } = useContext(cartContext);
    const inCart = cartItems.find(i => i.id === id);
    const count = inCart ? inCart.count : 0;

    return (
        <div className="item-card">
            <img
                className="item-card-img"
                height="300"
                src={imgURL}
                alt={title}
            />

            <h2 className="item-card-title"> {title} </h2>

            {price > 0 ? <h3 className="item-card-price">Precio: $ {price}</h3> : <h3 className="item-card-price">Gratis</h3>}

            <div className="card-controls">
                <button onClick={() => removeItem(id)} disabled={count === 0}>-</button>
                <span className="item-count">{count}</span>
                <button onClick={() => addToCart({ id, title, imgURL, price })}>+</button>
            </div>

            <div className="card-links">
                <Link to={`/detalle/${id}`}>
                    <button>Ver detalle</button>
                </Link>
                <Link to={`/categoria/${category}`}>
                    <button>Ver más de esta categoría</button>
                </Link>
            </div>
        </div>
    )
}

export default Item;