import React from 'react';
import Helmet from '../components/Helmet';

const Home = () => {
    return (
        <Helmet title={"Home"}>
            
            <div className='main_content_home d-flex align-items-center'>
                <div>
                    <h1 className='text-center text-white'>
                        Hola, soy <br/>
                        <span className='name'>Cristóbal Salazar Salas</span>.
                
                    </h1>

                    <p className='mt-5 fs_20 text-center p_home'>Desarrollador Front-end egresado de la carrera técnica "Analista Programador" en el Centro de Formación Técnica Inacap, sede de Curicó, Región del Maule.</p>
                </div>

                
            </div>

            <div className='main_content_home'>
                <p className='text-center text-white'>
                    Sobre mí
                </p>
            </div>
                
            
        </Helmet>
    )
}

export default Home;