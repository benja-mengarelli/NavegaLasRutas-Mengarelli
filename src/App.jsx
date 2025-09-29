import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Navbar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router';


function App() {
  const nombre = "Benja"

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer /* titulo={`Bienvenido a mi tienda ${nombre}`} */ />} />
          <Route path="/categoria/:categParam" element={ <ItemListContainer />} />
          <Route path="/detalle/:idParam" element={ <ItemDetailContainer/>} />
          <Route path="*" element={<h1>404: Página no encontrada</h1>} />
        </Routes>

      </BrowserRouter>

      

    </>
  )
}

export default App
