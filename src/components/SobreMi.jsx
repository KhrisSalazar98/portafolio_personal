import React from 'react';
// import imgPersonal from '../img/milos.jpg';
import imgAboutMe from '../img/cristobal_salazar2.jpeg';

const SobreMi = () => {
    return (
        <div className='mt-5 mt-xl-0'>
            <h2 className='titulo_componente'>
                Sobre mí.
            </h2>
            <hr />

            <h3 className='mt-5'>
                Hola, soy <br/>
                <span className='name'>Cristóbal Salazar Salas</span>.
            </h3>

            <div className="container mt-5">
                <div className="row justify-content-center justify-content-xl-between">
                    <div className='col-xl-4 d-flex justify-content-center align-items-center container_img_aboutMe'>
                        <img className='rounded-circle img_aboutMe' src={imgAboutMe} alt="Foto Cristóbal Salazar" />
                    </div>

                    <div className='col-xl-8'>
                        <p className='mt-5 text-center p_home p_aboutMe'>
                            Analista Programador egresado en el 
                            Centro de Formación Técnica Inacap, sede de Curicó, Región del Maule. 
                        </p>

                        <p className='text-center p_home p_aboutMe'>
                            Realicé mi práctica profesional en la empresa 
                            Jota A Diseño y Desarrollo en la comuna de Providencia<br className='d-md-none' />(Región Metropolitana).
                            Después de dar por finalizada la práctica profesional, me he desempeñado en el 
                            Desarrollo Frontend junto al equipo de Jota A, aplicando <span className='html'>HTML</span>, 
                            <span className='css'>CSS</span>, <span className='js'>JavaScript</span> y <span className='bootstrap'>Bootstrap</span>. 
                        </p>

                        <p className='text-center p_home p_aboutMe'>
                            Posterior a lo antes mencionado, me he enfocado en aprender a desarrollar proyectos web usando la librería de JavaScript conocida como <span className='react'>React</span>, 
                            estilizar elementos HTML con el preprocesador de CSS <span className='sass'>SASS</span>, 
                            y manejar el estado global con <span className='reduxToolkit'>Redux Toolkit</span>.
                        </p>
                    </div>
                </div>
            </div>
            
            
            
            
        </div>
    )
}

export default SobreMi;