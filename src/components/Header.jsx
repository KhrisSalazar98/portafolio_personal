import React, { useEffect, useRef } from 'react';
import NavBar from './NavBar';

const Header = () => {

    const headerRef = useRef(null);

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('sticky__header');
            }else{
                headerRef.current.classList.remove('sticky__header');
            }
        });
    }

    useEffect(() => {
        stickyHeaderFunc();

        return () => window.removeEventListener('scroll', stickyHeaderFunc);
    });


    return (
        
        <header ref={headerRef}>
            <NavBar />
        </header>
              
    )
}

export default Header;