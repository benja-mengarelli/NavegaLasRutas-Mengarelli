import Item from '../Cards/Card';
import getMockAPIData, { getProductById } from '../../data/SimularAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './ItemDetail.css';

export default function ItemDetailContainer(args) {
    const { idParam } = useParams();
    const [product, setProduct] = useState({ loading: true });

    useEffect(() => {
        getProductById(idParam)
            .then(response => setProduct(response))
            .catch(error => alert(error))
    }, [])

    // If con early return
    if (product.loading) {
        return <p>Cargando...</p>
    }

    return (
    <div className="item-card">
        <h2 className="item-card-title">{product.nombre}</h2>
        <img
            className="item-card-img"
            height="800"
            src={product.imagenURL}
        />
        <h3 className="item-card-price">Precio: $ {product.precio}</h3>
        <div style={{ textAlign: "center" }}>
            <p>{product.descripcion}</p>
        </div>
        <div>
            <button>Agregar al carrito</button>
        </div>

    </div>
    )
} 