import React from 'react';

import { NavLink } from 'react-router-dom';

const nav__links = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/sobremi',
        display: 'Sobre Mí'
    },
    {
        path: '/habilidades',
        display: 'Habilidades'
    },
    {
        path: '/proyectos',
        display: 'Proyectos'
    },
] 

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg py-4">
            <div className="container-fluid">
                <span className="py-1 px-2 fs_25 logo">(CS)</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav mt-3 mt-lg-0">
                        {
                            nav__links.map((item,index) => (
                                <li className='nav-item ' key={index}>
                                    <NavLink 
                                        to={item.path} 
                                        className={(navClass)=> navClass.isActive ? 'px-3 py-1 rounded-pill nav__active' : 'px-3 py-1 rounded-pill'}
                                    >{item.display}</NavLink> 
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;