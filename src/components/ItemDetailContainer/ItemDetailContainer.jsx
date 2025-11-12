import Item from '../Cards/Card';
import { getProductById } from '../../data/firebase';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetail.css';
import cartContext from "../../context/cartContext";

export default function ItemDetailContainer(args) {
    const { idParam } = useParams();
    const [product, setProduct] = useState({ loading: true });
    const context = useContext(cartContext);

    useEffect(() => {
        getProductById(idParam)
            .then(response => setProduct(response))
            .catch(error => alert(error))
    }, [])

    // If con early return
    if (product.loading) {
        return <p>Cargando...</p>
    }

    const inCart = cartItems.find(i => i.id === product.id);
    const count = inCart ? inCart.count : 0;

    return (
    <div className="item-detail-container">
        <div className="item-detail">
            <div className="item-detail-img">
            <img src={product.imagenURL} alt={product.nombre}/>
            <h2 className="item-detail-title">{product.nombre}</h2>
            </div>
            <div className='description'>
                <div style={{ textAlign: "center" }}>
                    <p>{product.descripcion}</p>
                </div>
                {product.precio > 0 ? <h3 className="item-detail-price">Precio: $ {product.precio}</h3> : <h3 className="item-detail-price">Gratis</h3>}
                <div className="detail-controls">
                    <button onClick={() => removeItem(product.id)} disabled={count === 0}>-</button>
                    <span className="item-count">{count}</span>
                    <button onClick={() => addToCart({
                        id: product.id,
                        title: product.nombre,
                        imgURL: product.imagenURL,
                        price: product.precio
                    })}>+</button>
                </div>
            </div>
        </div>
    </div>
    )
} 