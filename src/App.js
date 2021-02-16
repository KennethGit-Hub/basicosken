import React,{Fragment,useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';

function App() {

  // Listado de productos
  const [productos, guardarProductos]= useState([
    {id: 1, nombre: 'Camisa RJS',precio:50},
    {id: 2, nombre: 'Polo VJS',precio:20},
    {id: 3, nombre: 'Cono FJS',precio:30},
    {id: 4, nombre: 'jean T JS',precio:40},
  ]);

  // Obtener fecha
  const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header
        titulo = 'Tienda Virtual'
      />
      <h1>Lista de productos</h1>
      {productos.map(producto => (
        <Producto
        key={producto.id}
          producto = {producto}
        />
      ))}
      
      <Footer
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
