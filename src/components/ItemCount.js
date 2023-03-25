import React, { useState } from "react";

const ItemCount = ({ onAdd, stock = 5 }) => {
    const [count, setCount] = useState(1);
    const handlerClickAdd = () => {
        if (count < stock) {
        setCount(count + 1);
        }
    };
    const handlerClickSubstract = () => {
        if (count > 0) {
        setCount(count - 1);
        }
    };
    const handlerClickAddToCart = () => {
        onAdd(count);
    };
    <div>
        <div className="containerButtons">
            <button className="boton-" onClick={() => handlerClickSubstract()}>
            -
            </button>
            <h2>{count}</h2>
            <button className="boton+" onClick={() => handlerClickAdd()}>
            +
            </button>
        </div>
        <button className="agregarCart" onClick={() => handlerClickAddToCart()}>
            Agregar al carrito
        </button>
    </div>
};
export default ItemCount;