import React from "react";
import './Navbar.css'
import { Link, NavLink } from "react-router-dom";

const NavCategories = () => {
    const categories = [
        {id: 1, name: "Clóset", route: "/categorias/closet"},
        {id: 2, name: "Accesorios", route: "/categorias/accesorios"},
        {id: 3, name: "Zapatos", route: "/categorias/zapatos"}
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

