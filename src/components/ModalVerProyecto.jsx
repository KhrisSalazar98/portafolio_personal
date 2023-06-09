import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faGlobe, faPenRuler, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

const ModalVerProyecto = ({item,index}) => {

    const {name, description, img, tecnologies, url, design, designUrl} = item;

    return (
        <div className="modal fade" id={`modalVerProyecto_${index}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content pb-5">
                    <div className="modal-header d-flex justify-content-end">
                        <button type="button" className='bg-transparent rounded-circle py-1 px-2 btnCloseModal_verProyecto' data-bs-dismiss="modal" aria-label="Close" ><FontAwesomeIcon icon={faXmark} size="xl" /></button>
                    </div>
                    <div className="modal-body p-0 p-md-3">
                        <h3 className="modal-title fs-4 mb-3 text-center" id="exampleModalLabel">{name}</h3>
                        <hr />
                        <div className='container'>
                            <div className="row justify-content-center mt-4">
                                <div className='col-7 col-sm-6 col-lg-4'>
                                    <img className='rounded-circle w-100 img_proyecto' src={img} alt={name} />
                                </div>
                                <div className='col-12 col-sm-12 col-lg-8'>
                                    <p className='mt-5 txt_proyect_description'>
                                        {description}
                                    </p>

                                    <p className='mt-5 text-start'>
                                        Tecnologías Usadas:
                                    </p>
                                    <div className="row">
                                        {tecnologies.map((item,index) => (
                                            <div key={index} className={`col-sm-${item.cols} mb-3`}>
                                                <span className={`mx-2 my-4 px-2 rounded-pill ${item.class}`}>{item.tecName}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="mt-4 d-flex justify-content-center align-items-center flex-column">

                        {design ? (
                            <Link target="_blank" to={designUrl} className="mb-4 px-3 py-2 rounded-pill btnIrAlProyecto"><FontAwesomeIcon icon={faPenRuler} size="xl" /> Ir al diseño</Link>
                        ): (
                            <span className='mb-5 px-2 px-lg-0 color_secundario txt_noDesign'><FontAwesomeIcon icon={faCircleExclamation} size="lg" /> NOTA: Este proyecto no tiene diseño creado en Figma.</span>
                        )}

                        <Link target="_blank" to={url} className="px-2 px-lg-3 py-2 rounded-pill btnIrAlProyecto"><FontAwesomeIcon icon={faGlobe} size="xl" /> Ir a {name}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalVerProyecto;