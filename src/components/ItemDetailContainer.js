import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

export const ItemDetailContainer = () => {
    const [product, setUnProducto] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const obtenerProducto = async () => {
            try {
            setTimeout(() => {
                const res = fetch ();
            }, 2000);
            const data = await res.json();
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