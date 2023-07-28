import React from 'react';
import {listConocimientos} from '../js/data'; 

const ContenidoHabilidades = () => {

    return (
        <div className='my-5 py-5 mt-lg-0'>
            <h2 className='titulo_componente'>
                Conocimientos.
            </h2>
            <hr />

            <div className="row mt-5 pt-5">
                

                {listConocimientos.map((item,index) =>(
                    <div key={index} className='col-6 col-sm-4 col-lg-2 mb-3'>
                        <div className='m-2 habilidad'>
                            <img className='img_habilidad' src={item.img} alt={item.name} />
                            <p className={`mt-3 txt_habilidad ${item.class}`}>{item.name}</p>
                        </div>
                    </div>
                ))}
                

            </div>
        </div>
    )
}

export default ContenidoHabilidades;