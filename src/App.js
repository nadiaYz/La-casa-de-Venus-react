import React from "react";
import Navbar from "./components/Navbar.js";
import Greeting, { ItemListContainer } from "./containers/ItemListContainer.js";
import Cart from "./containers/Cart.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path='/' element={<div className="contenedor" ><ItemListContainer greeting='Bienvenidos'/></div>} ></Route>
        <Route path='/cart' element={<Cart />} ></Route>
        <Route path='/categorias/:nombre' element={<div className="contenedor" ><ItemListContainer greeting='Bienvenidos'/></div>} ></Route>
        <Route path='/producto/:id' element={<div className="contenedor" ><ItemListContainer /></div>} ></Route>
      </Routes>
    </BrowserRouter> 
  )
};

export default App;