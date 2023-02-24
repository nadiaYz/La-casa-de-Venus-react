import React from 'react'
import './Navbar.css'
import Carrito from './CartWidget.js';
import NavCategories from './NavCategories.js'
import { Link } from 'react-router-dom';

const Navbar = ()  => {
    return (
        <>
            <div className='navBarDiv'>
                <div className='logo'><Link to={'/'}><span>.</span> la casa de Venus <span>.</span></Link></div>
                <nav className='navBar'>
                    <NavCategories />
                </nav>
                <div>
                    <Link to={"/cart"}><Carrito /></Link>
                </div>
            </div>
        </>
    )
}

export default Navbar

