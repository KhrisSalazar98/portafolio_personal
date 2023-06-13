import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='mt-5'>
            <div className="container">
                <div className="row">
                    <div className='col-12 col-sm-12 col-lg-4 mt-5'>
                        <h4 className='footer_subTitle footer_subTitle1 text-center'>Conocimientos</h4>
                        
                        <ul className='mt-5 text-center text-lg-start'>
                            <li className='text-start li_footer'><span className='html'>HTML</span></li>
                            <li className='text-start li_footer'><span className='css'>CSS</span></li>
                            <li className='text-start li_footer'><span className='js'>JavaScript</span></li>
                            <li className='text-start li_footer'><span className='bootstrap'>Frameword de CSS "Bootstrap"</span></li>
                            <li className='text-start li_footer'><span className='react'>Librería de JavaScript "React"</span></li>
                            <li className='text-start li_footer'><span className='sass'>Preprocesador de CSS "SASS"</span></li>
                            <li className='text-start li_footer'><span className='reduxToolkit'>Redux Toolkit</span></li>
                            <li className='text-start li_footer'><span className='npm'>NPM (básico)</span></li>
                            <li className='text-start li_footer'><span className='git'>Controlador de versiones Git</span></li>
                            <li className='text-start li_footer'><span className='figma'>Figma</span></li>
                        </ul>

                    </div>

                    <div className='col-12 col-sm-12 col-lg-4 mt-5'>
                        <h4 className='footer_subTitle footer_subTitle2 text-center'>Proyetos</h4>

                        <ul className='mt-5 text-center text-lg-start'>
                            <li className='text-start li_footer'><Link target="_blank" to="https://6483876519d59a0e2ea30a9c--comforting-kringle-77bde7.netlify.app/index.html">Minijuegos Cris</Link></li>
                            <li className='text-start li_footer'><Link target="_blank" to="https://dulcet-wisp-73607a.netlify.app/">My Earrings</Link></li>
                            <li className='text-start li_footer'><Link target="_blank" to="https://deluxe-pothos-98fff4.netlify.app/">Monthly Expenses</Link></li>
                            
                        </ul>
                    </div>

                    <div className='col-12 col-sm-12 col-lg-4 mt-5 col_ul_contact'>
                        <h4 className='footer_subTitle footer_subTitle3 text-center'>Contacto</h4>

                        <ul className='mt-5'>
                            <li className='text-start li_footer'><Link target='_blank' to="tel:+56987364001"><FontAwesomeIcon className='me-2' icon={faPhone} size="lg" />Telefóno</Link></li>
                            <li className='text-start li_footer'><Link target='_blank' to="mailto:cristobal_adm_2015@outlook.com"><FontAwesomeIcon className='me-2' icon={faEnvelope} size="lg" />Correo Electrónico</Link></li>
                        </ul>
                    </div>
                    
                    
                </div>
                <div className='pt-5 pb-3'>
                    <hr />
                    <p className='text-white text-center'>By <a className='nameInFooter' href="#nameContainer">Cristóbal Salazar Salas</a> - &copy; {new Date().getFullYear()}{" "}</p>
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer;