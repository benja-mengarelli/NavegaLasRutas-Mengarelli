import { Link } from 'react-router';
import './Card.css'

/*Se deconstruye la prop mandada */ 
function Item({ id, title, imgURL, price }) {

    return (
        <div className="item-card">
            <h2 className="item-card-title"> {title} </h2>
            <img
                className="item-card-img"
                height="300"
                src={imgURL}
                alt={title}
            />
            <h3 className="item-card-price">Precio: $ {price}</h3>
            <div style={{ textAlign: "center" }}>
                <Link to={`/detalle/${id}`}>
                    <button>Descripcion</button>
                </Link>
            </div>
        </div>
    )
}

export default Item;