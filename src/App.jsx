import { useState } from 'react'
import './App.css'
import ItemListContainer from './components/itemListContainer'
import Navbar from './components/navBar'


function App() {
  const nombre = "Benja"

  return (
    <>
      <Navbar/>
      <ItemListContainer titulo={`Bienvenido a mi tienda ${nombre}`}/>

    </>
  )
}

export default App
