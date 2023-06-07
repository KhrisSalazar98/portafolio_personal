import React from 'react';

import htmlImg from '../img/html.png';
import cssImg from '../img/css.png';
import js from '../img/js.png';
import bootstrapImg from '../img/bootstrap.png';
import sass from '../img/sass.png';
import reactImg from '../img/react.png';
import npm from '../img/npm.png';
import reduxToolKitImg from '../img/redux_toolkit.png';
import figma from '../img/figma.png';

const ContenidoHabilidades = () => {

    return (
        <div className='mt-5 mt-lg-0'>
            <h2 className='titulo_componente'>
                Conocimientos.
            </h2>
            <hr />

            <div className='mt-5'>
                <ul>
                    <li className='text-start mb-1'><span className='html'>HTML</span></li>
                    <li className='text-start mb-1'><span className='css'>CSS</span></li>
                    <li className='text-start mb-1'><span className='js'>JavaScript</span></li>
                    <li className='text-start mb-1'><span className='bootstrap'>Frameword de CSS "Bootstrap"</span></li>
                    <li className='text-start mb-1'><span className='react'>Librería de JavaScript "React"</span></li>
                    <li className='text-start mb-1'><span className='sass'>Preprocesador de CSS "SASS"</span></li>
                    <li className='text-start mb-1'><span className='reduxToolkit'>Redux Toolkit</span></li>
                    <li className='text-start mb-1'><span className='npm'>NPM (básico)</span></li>
                    <li className='text-start mb-1'><span className='git'>Controlador de versiones Git</span></li>
                    <li className='text-start mb-1'><span className='figma'>Figma</span></li>
                </ul>
            </div>

            <div className='d-flex justify-content-center align-items-center mb-5'>
                <div className="box">
                    <span className='img_html'><img src={htmlImg} alt="HTML" /></span>
                    <span className='img_css'><img src={cssImg} alt="CSS" /></span>
                    <span className='img_bootstrap'><img src={bootstrapImg} alt="Boostrap" /></span>
                    <span className='img_js'><img src={js} alt="JavaScript" /></span>
                    <span className='img_react'><img src={reactImg} alt="React" /></span>
                    <span className='img_sass'><img src={sass} alt="SASS" /></span>
                    <span className='img_npm'><img src={npm} alt="NPM" /></span>
                    <span className='img_reduxToolkit'><img src={reduxToolKitImg} alt="Redux Toolkit" /></span>
                    <span className='img_figma'><img src={figma} alt="Figma" /></span>                
                </div>
            </div>
        </div>
    )
}

export default ContenidoHabilidades;