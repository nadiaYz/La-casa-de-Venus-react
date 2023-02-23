import React from "react";
import Item from "./Item";

export const Lista = ({productos}) => {
    return (
        <>
            {productos.map((producto) => {
                return <Item key={producto.id} producto={producto} />
            })}
        </>
    )
}

export default Lista