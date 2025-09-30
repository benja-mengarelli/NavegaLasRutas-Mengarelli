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
    <div className="item-detail-container">
        <div className="item-detail">
            <div className="item-detail-img">
            <img src={product.imagenURL}/>
            <h2 className="item-detail-title">{product.nombre}</h2>
            </div>
            <div className='description'>
                <div style={{ textAlign: "center" }}>
                    <p>{product.descripcion}</p>
                </div>
                {product.precio > 0 ? <h3 className="item-detail-price">Precio: $ {product.precio}</h3> : <h3 className="item-detail-price">Gratis</h3>}
                <div>
                    <button>Agregar al 🛒</button>
                </div>
            </div>
        </div>
    </div>
    )
} 