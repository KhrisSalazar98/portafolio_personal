import React from 'react';

import { Link } from 'react-router-dom';

import imgPersonal from '../img/milos.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowDown, faGlobe } from '@fortawesome/free-solid-svg-icons';

import Helmet from '../components/Helmet';
import SobreMi from '../components/SobreMi';
import ContenidoHabilidades from '../components/ContenidoHabilidades';


const Home = () => {
    return (
        <Helmet title={"Home"}>
            
            <div className='main_content_home'>
                <div>
                    <div className="row justify-content-center mt-5">
                        <div className='col-12 col-sm-12 d-flex justify-content-center align-items-center container_img_aboutMe'>
                            <img className='rounded-circle img_aboutMe' src={imgPersonal} alt="Foto Cristóbal Salazar" />
                        </div>
                    </div>

                    <h1 className='text-center text-white mt-5'>

                        <span className='name'>Cristóbal Salazar Salas</span>.
                
                    </h1>

                    <p className='mt-5 text-center p_home'>Desarrollador Front-end egresado de la carrera técnica "Analista Programador" en el Centro de Formación Técnica Inacap, sede de Curicó, Región del Maule.</p>

                    <div className='mt-5 text-center container_descargarCV'>
                        <button className='px-3 py-2 rounded-pill' type="button"><FontAwesomeIcon icon={faCloudArrowDown} size="xl" /> Descargar CV</button>
                    </div>

                    <div className='mt-4 text-center container_descargarCV'>
                        <Link to="https://github.com/KhrisSalazar98" target='_blank' className='px-3 py-2 rounded-pill' type="button"><FontAwesomeIcon icon={faGlobe} size="xl" /> Github</Link>
                    </div>

                </div>

                
            </div>

            <div className='main_content_home'>
                <div className='text-center text-white mt-5 mt-xl-0'>
                    <SobreMi />
                </div>
            </div>

            <div className='main_content_home'>
                <div className='text-center mt-5 mt-xl-0'>
                    <ContenidoHabilidades />
                </div>
            </div>
                
            
        </Helmet>
    )
}

export default Home;