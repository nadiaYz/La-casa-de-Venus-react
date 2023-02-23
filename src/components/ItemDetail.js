import React from "react";

const ItemDetail = ({ producto }) => {
    return (
        <div className="productoDiv">
            <img  className="itemDetail" src={producto.img} alt="" />
            <h2 className="nombreDetail" >{producto.item}</h2>
            <p className="precioDetail" >${producto.precio}</p>
            <p className="detallesDetail">Detalles:</p>
            <p className="descripcionDetail">Descripción: {producto.descripcion}</p>
            <p className="composicionDetail" >Composición: {producto.composicion}</p>
            <p className="colorDetail" >Color base: {producto.color}</p>
        </div>
    )
};

export default ItemDetail;