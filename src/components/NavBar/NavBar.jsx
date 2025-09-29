import "./navbar.css"
import { Link } from "react-router";
import CartWidget from "./CartWidget"

export default function Navbar(){


    return (
        <nav className="navbar">
            <Link to="/"> 
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRDnHvqRUmHOQJpJTwvim3xxFuRPFZk7F8Pw&s" alt="Logo retro"/>
            </Link>
            <div className="categorias">
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/categoria/Supervivencia">Supervivencia</Link>
                    </li>
                    <li>
                        <Link to="/categoria/Shooter">Shooter</Link>
                    </li>
                    <li>    
                        <Link to="/categoria/Automovilismo">Automovilismo</Link>
                    </li>
                    <li>
                        <Link to="/categoria/Deportes">Deportes</Link>
                    </li>
                    <li>
                        <Link to="/categoria/Gratuito">Gratuitos</Link>
                    </li>
                </ul>
            </div>
            <div className="widgetCarrito">
                <CartWidget />
            </div>
        </nav>
    )
}