import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import SobreMi from '../pages/SobreMi';
import Habilidades from '../pages/Habilidades';
import Proyectos from '../pages/Proyectos';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={'/home'}/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobremi" element={<SobreMi />} />
            <Route path="/habilidades" element={<Habilidades />} />
            <Route path="/proyectos" element={<Proyectos />} />
        </Routes>
        
    )
  
}

export default Routers;