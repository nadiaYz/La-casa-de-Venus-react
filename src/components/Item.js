import React from "react";
import './cards.css'

const Item = ({producto}) => {
    return (
        <div className="productoDiv">
            <img  className="itemImg" src={producto.img} alt="" />
            <h2 className="nombreItem" >{producto.item}</h2>
            <p className="precioDiv" >${producto.precio}</p>
            <button className="detallesItem" >Detalles</button>
        </div>
    )
}

export default Item