import React from 'react'
import './Navbar.css'
import Carrito from './CartWidget.js';

const Navbar = ()  => {
    return (
        <>
            <div className='navBarDiv'>
                <a href="#" className='logo'><span>.</span> la casa de Venus <span>.</span></a>
                <nav className='navBar'>
                    <a href="#menúP"> Menú principal </a>
                    <a href="#closet"> Clóset </a>
                    <a href="#accesorios"> Accesorios </a>
                    <a href="#infoenvios"> Info de envíos </a>
                </nav>
                <div>
                    <Carrito />
                </div>
            </div>
        </>
    )
}

export default Navbar

