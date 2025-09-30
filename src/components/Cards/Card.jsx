import { Link } from 'react-router';
import './Card.css'

/*Se deconstruye la prop mandada */
function Item({ id, title, imgURL, price }) {

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
            <div style={{ textAlign: "center" }}>
                <Link to={`/detalle/${id}`}>
                    <button>Descripcion</button>
                </Link>
                <Link to={`/`}>
                    <button>🛒</button>
                </Link>
            </div>
            <Link to={`/categoria/${id}`}>
                <button>Ver más de esta categoría</button>
            </Link>
        </div>
    )
}

export default Item;