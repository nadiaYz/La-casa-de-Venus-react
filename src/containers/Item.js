import React from "react";
import '../components/cards.css'
import { Link } from "react-router-dom";

const Item = ({producto}) => {
    return (
        <div className="productoDiv">
            <img  className="itemImg" src={producto.img} alt="" />
            <h2 className="nombreItem" >{producto.item}</h2>
            <p className="precioDiv" >${producto.precio}</p>
            <Link to={`/producto/${producto.id}`} ><button className="detallesItem">Detalles</button></Link>
        </div>
    )
}

export default Item