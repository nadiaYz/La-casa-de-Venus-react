import React from "react";
import '../components/detalle.css'
import ItemCount from "../components/ItemCount";

const ItemDetail = ({ producto }) => {
    return (
        <div className="cardDetalleDiv">
            <h2 className="nombreDetail" >{producto.item}</h2>
            <p className="descripcionDetail">{producto.descripcion}</p>
            <img className="itemDetailImg" src={producto.img} alt="" />
            <div className="detallesDiv">
                <p className="precioDetail" >${producto.precio}</p> 
                <p className="composicionDetail" >Composición: {producto.composicion}</p>
                <p className="colorDetail" >Color base: {producto.color}</p>
            </div>
            <ItemCount />
        </div>
    )
};

export default ItemDetail;