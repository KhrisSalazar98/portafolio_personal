import React, {useState} from 'react';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const nav__links = [
    {
        path: '/',
        display: 'Home'
    },
    {
        path: '/sobremi',
        display: 'Sobre mí'
    },
    {
        path: '/conocimientos',
        display: 'Conocimientos'
    },
    {
        path: '/proyectos',
        display: 'Proyectos'
    },
] 

const NavBar = () => {

    const [collapse,setCollapse] = useState(false);
    

    return (
        <nav className="navbar navbar-expand-lg py-3 py-lg-4">
            <div className="container-fluid">
                <span className="py-1 px-2 fs_25 logo">(CS)</span>
                <button onClick={() => setCollapse(!collapse)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} className={`${collapse ? 'd-none' : 'd-block'} fa_bars`} />
                    <FontAwesomeIcon icon={faXmark} className={`${collapse ? 'd-block' : 'd-none'} fa_Xmark`} />
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