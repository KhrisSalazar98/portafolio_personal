import React from 'react';
import Helmet from '../components/Helmet';
import ContenidoHabilidades from '../components/ContenidoHabilidades';

const Habilidades = () => {
    return (
        <Helmet title={"Conocimientos"}>
            <div className='text-center mt-5'>
                <ContenidoHabilidades />
            </div>
        </Helmet>
    )
}

export default Habilidades;