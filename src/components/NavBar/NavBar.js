import {React, useState} from "react";
import './NavBar.css';

const NavBar = ({title}) => {
    return (
        <nav className="nav-bar">
            <h1>{title}</h1>
        </nav>
    )
}

export default NavBar;
