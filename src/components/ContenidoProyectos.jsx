import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import ModalVerProyecto from './ModalVerProyecto';

import { proyects } from '../js/data';

const ContenidoProyectos = () => {

    return (
        <div className='my-5 py-5 mt-lg-0'>
            <h2 className='titulo_componente'>
                Proyectos.
            </h2>
            <hr />

            <div className='mt-5 pt-5'>
                <div className='row justify-content-center'>

                    {proyects.map((item,index) => (
                        <div key={index} className='col-12 col-sm-12 col-md-6 col-lg-4 mb-5 d-flex justify-content-center'>
                            <div className='card_proyect'>
                                <div className='lines'></div>
                                <div className='imgBx'>
                                    <img src={item.img} alt={item.name} />
                                </div>
                                <div className='content'>
                                    <div className='details'>
                                        <h3 className=''>{item.name}</h3>
                                        <button className='my-3 my-xl-4 px-3 py-2 rounded-pill btnVerProyecto' data-bs-toggle="modal" data-bs-target={`#modalVerProyecto_${index}`}><FontAwesomeIcon icon={faEye} /> Ver Proyecto</button>
                                    </div>
                                </div>
                            </div>

                            <ModalVerProyecto index={index} item={item} />
                        </div>
                    ))}
        
                </div>
            </div>
        </div>
    )
}

export default ContenidoProyectos;