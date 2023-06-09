import React from 'react';

import { Link } from 'react-router-dom';
import imgMilos from "../img/milos.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import imgMyEarrings from "../img/my_earrings_img.png";
import imgMonthlyExpenses from "../img/monthy_expenses_img.png";
import imgMinijuegosCris from "../img/minijuegos_cris_img.png";

const ContenidoProyectos = () => {

    const tecs = ["HTML","CSS","JavaScript","Boostrap","SASS","React","Redux"];

    const proyects = [
        {
            name: "Minijuegos Cris",
            description: "Proyecto web que consiste en un conjunto de minijuegos (Sopa de letras, Tres en Raya, Memorice, Simón Dice).",
            img: "",
            tecnologies: [
                tecs[0], tecs[1], tecs[2], tecs[3]
            ],
            url: ""
        },
        {
            name: "My Earrings",
            description: "Aplicación Web Progresiva que permite almacenar las tareas personales del usuario aplicando LocalStorage.",
            img: "",
            tecnologies: [
                tecs[2], tecs[3], tecs[4], tecs[5], tecs[6]
            ],
            url: ""
        },
        {
            name: "Monthly Expenses",
            description: "Aplicación Web Progresiva que facilita al usuario con el registro de sus gastos monetario de manera mensual con LocalStorage.",
            img: "",
            tecnologies: [
                tecs[2], tecs[3], tecs[4], tecs[5], tecs[6]
            ],
            url: ""
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
                    
                    <div className='col-12 col-sm-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center'>
                        <div className='card_proyect'>
                            <div className='lines'></div>
                            <div className='imgBx'>
                                <img src={imgMinijuegosCris} alt="" />
                            </div>
                            <div className='content'>
                                <div className='details'>
                                    <h3 className=''>Minijuegos Cris</h3>
                                    <button className='my-3 my-xl-4 px-3 py-2 rounded-pill btnVerProyecto'><FontAwesomeIcon icon={faEye} /> Ver Proyecto</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center'>
                        <div className='card_proyect'>
                            <div className='lines'></div>
                            <div className='imgBx'>
                                <img src={imgMyEarrings} alt="" />
                            </div>
                            <div className='content'>
                                <div className='details'>
                                    <h3 className=''>My Earrings</h3>
                                    <button className='my-3 my-xl-4 px-3 py-2 rounded-pill btnVerProyecto'><FontAwesomeIcon icon={faEye} /> Ver Proyecto</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center'>
                        <div className='card_proyect'>
                            <div className='lines'></div>
                            <div className='imgBx'>
                                <img src={imgMonthlyExpenses} alt="" />
                            </div>
                            <div className='content'>
                                <div className='details'>
                                    <h3 className=''>Monthly Expenses</h3>
                                    <button className='my-3 my-xl-4 px-3 py-2 rounded-pill btnVerProyecto'><FontAwesomeIcon icon={faEye} /> Ver Proyecto</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default ContenidoProyectos;