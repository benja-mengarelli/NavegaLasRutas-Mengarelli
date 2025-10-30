import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Navbar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router';
import app from './data/firebase';
import { CartProvider } from './context/cartContext';
import CartContainer from './components/Cart/CartContainer';


function App() {
  console.log("Firebase App iniciada: ", app.name);

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />

          {/* <button onClick={cargarProductos}>cargar prods</button> */}

          <Routes>
            <Route path="/" element={<ItemListContainer /* titulo={`Bienvenido a mi tienda ${nombre}`} */ />} />
            <Route path="/categoria/:categParam" element={ <ItemListContainer />} />
            <Route path="/detalle/:idParam" element={ <ItemDetailContainer/>} />
            <Route path="*" element={<h1>404: Página no encontrada</h1>} />
          </Routes>

        </BrowserRouter>
      </CartProvider>
      

    </>
  )
}

export default App
