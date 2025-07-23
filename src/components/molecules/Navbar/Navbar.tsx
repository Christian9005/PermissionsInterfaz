import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">N5 Permisos</div>
            <ul className="navbar__links">
                <li><NavLink to="/" className="navbar__link">Permisos</NavLink></li>
                <li><NavLink to="/permissions/create" className="navbar__link">Nuevo Permiso</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;
