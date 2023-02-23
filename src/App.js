import React from "react";
import Navbar from "./components/Navbar.js";
import Greeting, { ItemListContainer } from "./components/ItemListContainer.js";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="contenedor" ><ItemListContainer greeting='Bienvenidos'/></div> 
    </>
  )
};

export default App;