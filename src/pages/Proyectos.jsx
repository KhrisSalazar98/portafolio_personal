import React from 'react';
import ContenidoProyectos from '../components/ContenidoProyectos';
import Helmet from '../components/Helmet';

const Proyectos = () => {
    return (
        <Helmet title={"Proyectos"}>
            <div className='text-center text-white mt-5'>
                <ContenidoProyectos />
            </div>
        </Helmet>
    )
}

export default Proyectos;