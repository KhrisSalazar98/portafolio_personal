import React from 'react';
import Helmet from '../components/Helmet';
import AboutMe from '../components/SobreMi';

const SobreMi = () => {
    return (
        <Helmet title={"Sobre mí"}>
            <div className='text-center text-white mt-5'>
                <AboutMe />
            </div>
        </Helmet>
    )
}

export default SobreMi;