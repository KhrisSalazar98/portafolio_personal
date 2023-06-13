import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import imgMyEarrings from "../img/my_earrings_img.png";
import imgMonthlyExpenses from "../img/monthy_expenses_img.png";
import imgMinijuegosCris from "../img/minijuegos_cris_img.png";

import ModalVerProyecto from './ModalVerProyecto';

const ContenidoProyectos = () => {

    const tecs = [
        {
            tecName: "HTML",
            class: "span_html",
            cols: 2
        },
        {
            tecName: "CSS",
            class: "span_css",
            cols: 2
        },
        {
            tecName: "JavaScript",
            class: "span_js",
            cols: 3
        },
        { 
            tecName: "Bootstrap",
            class: "span_bootstrap",
            cols: 3
        },
        {
            tecName: "SASS",
            class: "span_sass",
            cols: 2
        },
        {
            tecName: "React",
            class: "span_react",
            cols: 2
        },
        {
            tecName: "Redux Toolkit",
            class: "span_reduxToolkit",
            cols: 4
        }
    ];

    const proyects = [
        {
            name: "Minijuegos Cris",
            description: "Conjunto de minijuegos (Sopa de letras, Tres en Raya, Memorice, Simón Dice) desarrollado en plataforma web.",
            img: imgMinijuegosCris,
            tecnologies: [
                tecs[0], tecs[1], tecs[2], tecs[3]
            ],
            url: "https://6483876519d59a0e2ea30a9c--comforting-kringle-77bde7.netlify.app/index.html"
        },
        {
            name: "My Earrings",
            description: "Aplicación Web Progresiva que permite almacenar las tareas personales del usuario aplicando LocalStorage.",
            img: imgMyEarrings,
            tecnologies: [
                tecs[2], tecs[3], tecs[4], tecs[5], tecs[6]
            ],
            url: "https://dulcet-wisp-73607a.netlify.app/"
        },
        {
            name: "Monthly Expenses",
            description: "Aplicación Web Progresiva que facilita al usuario con el registro de sus gastos monetario de manera mensual con LocalStorage.",
            img: imgMonthlyExpenses,
            tecnologies: [
                tecs[2], tecs[3], tecs[4], tecs[5], tecs[6]
            ],
            url: "https://deluxe-pothos-98fff4.netlify.app/"
        }
    ];

    return (
        <div className='mt-5 pt-5 mt-lg-0'>
            <h2 className='titulo_componente'>
                Proyectos.
            </h2>
            <hr />

            <div className='mt-5 pt-5'>
                <div className='row justify-content-center'>

                    {proyects.map((item,index) => (
                        <div key={index} className='col-12 col-sm-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center'>
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