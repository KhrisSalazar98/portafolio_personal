import React from 'react';
import Helmet from '../components/Helmet';
import ContenidoHabilidades from '../components/ContenidoHabilidades';

const Habilidades = () => {
    return (
        <Helmet title={"Conocimientos"}>
            <div style={{height: "100vh"}} className='text-center mt-5'>
                <ContenidoHabilidades />
            </div>
        </Helmet>
    )
}

export default Habilidades;