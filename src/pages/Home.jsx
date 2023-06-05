import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';

import Helmet from '../components/Helmet';


const Home = () => {
    return (
        <Helmet title={"Home"}>
            
            <div className='main_content_home d-flex align-items-center'>
                <div>
                    <h1 className='text-center text-white mt-5 mt-xl-0'>
                        Hola, soy <br/>
                        <span className='name'>Cristóbal Salazar Salas</span>.
                
                    </h1>

                    <p className='mt-5 fs_20 text-center p_home'>Desarrollador Front-end egresado de la carrera técnica "Analista Programador" en el Centro de Formación Técnica Inacap, sede de Curicó, Región del Maule.</p>

                    <div className='mt-5 text-center container_descargarCV'>
                        <button className='border-0 px-3 py-2 rounded-pill' type="button"><FontAwesomeIcon icon={faCloudArrowDown} size="xl" /> Descargar CV</button>
                    </div>

                </div>

                
            </div>

            <div className='main_content_home'>
                <p className='text-center text-white mt-5 mt-xl-0'>
                    Sobre mí
                </p>
            </div>
                
            
        </Helmet>
    )
}

export default Home;