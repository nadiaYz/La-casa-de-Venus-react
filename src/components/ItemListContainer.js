import React from 'react'
import './Greeting.css'

export const ItemListContainer = ({ greeting })  => {
    return (
        <div className='greeting'>{greeting}</div>
    )
}

export default ItemListContainer;
