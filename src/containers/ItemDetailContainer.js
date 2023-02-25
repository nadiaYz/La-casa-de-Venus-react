import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const [product, setUnProducto] = useState([])
    const [loading, setLoading] = useState(true)
    const { id }= useParams();
    useEffect(() => {
        const obtenerProducto = async () => {
            try {
            setTimeout(() => {
                const res = fetch ("/productos.json");
            }, 2000);
            const data = await res.json();
            const productoFiltro = data.filter ( producto => {
                return producto.id === id
            })
            setUnProducto(data)
            } finally {
                setLoading(false)
            }
        }
        obtenerProducto();
        }, []);
    return (
        <>
            {<>{loading? <h1>Cargando...</h1> : <ItemDetail product={product} />}</>}
        </>
    )
}
export default ItemDetailContainer;