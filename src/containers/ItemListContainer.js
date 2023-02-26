import React, { useEffect, useState } from 'react'
import '../components/Greeting.css'
import Lista from './ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({ greeting })  => {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(false)
    const { id }= useParams();

    useEffect(() => {
    const obtenerProductos = async () => {
        try {
            const res = await fetch("/productos.json")
            const data = await res.json()
            if (id === undefined){
                setProductos(data)
            } else {
                const categoriaFiltro = data.filter ( dato => {
                    return dato.categoria === id
                })
                setProductos(categoriaFiltro);
            }
        }
        catch (e) {
            console.log(e);
            setError(true);
        }
    }
    obtenerProductos();
    }, [id]);

    return (
        <>
            <div className='greeting'>{greeting}</div>

    {!error ? (
        <>
            {productos.length ? (
                <Lista productos={productos}  />
            ) : (
                <h1>Cargando...</h1>
            )}
        </>
    ):(
        <>
        <h1>Hubo un error</h1>
        </>
    )}
    </>
    )
}

export default ItemListContainer;
