import { useContext } from "react";
import { Link } from "react-router-dom";
import cartContext from "../../context/cartContext";

export default function CartWidget(){
    const { countItems } = useContext(cartContext);
    return(
        <div className="widgetCarrito">
            <Link to="/cart">🛒{countItems()}</Link>
        </div>
    )
}