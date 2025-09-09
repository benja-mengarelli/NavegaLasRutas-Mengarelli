import "./navbar.css"

export default function Navbar(){


    return (
        <nav className="navbar">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRDnHvqRUmHOQJpJTwvim3xxFuRPFZk7F8Pw&s" alt="Logo retro"/>
            <div className="categorias">
                <ul>
                    <li>Terror</li>
                    <li>Shooter</li>
                    <li>RPG</li>
                </ul>
            </div>
            <div className="widgetCarrito">
                <span>🛒0</span>
            </div>
        </nav>
    )
}