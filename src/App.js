import React from "react";
import Navbar from "./components/Navbar.js";
import Greeting, { ItemListContainer } from "./components/ItemListContainer.js";

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting='Bienvenidos'/>
    </>
  )
};

export default App;