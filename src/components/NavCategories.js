import React from "react";
import './Navbar.css'
import { Link, NavLink } from "react-router-dom";

const NavCategories = () => {
    const categories = [
        {id: 1, name: "Clóset", route: "/category/Clóset"},
        {id: 2, name: "Accesorios", route: "/category/Accesorios"},
        {id: 3, name: "Zapatos", route: "/category/Zapatos"}
    ]
    return (
        <nav className='navBar'>
            {categories.map((category) => {
                return (
                    <Link key={category.id} to={category.route}> {category.name} </Link>
                )
            })}
        </nav>
    )
}

export default NavCategories

