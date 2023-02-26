import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [detalle, setDetalle] = useState([])
    const { id }= useParams();

    useEffect(() => {
        const obtenerDetalle = async () => {
            try {
                const res = await fetch ("/productos.json");
                const data = await res.json();
                const detalleFiltro = data.filter ( dato => {
                    return dato.id === id
                })
                setDetalle(detalleFiltro[0]);
            } finally {
                setLoading(false)
            }
        }
        obtenerDetalle();
        }, [id]);
    return (
        <>
            {<>{loading ? <h1>Cargando...</h1> : <ItemDetail producto={detalle} />}</>}
        </>
    )
}
export default ItemDetailContainer;