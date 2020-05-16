import React, { useState } from 'react';
import Routes from './routes';

import './StylesGlobal/global.sass';

import Menu from './Components/Menu';
import Footer from './Components/Footer';
import Container from './Components/PageContainer';
import Cart from './Components/Cart';


export default function App() {
    
    const [isCartOpen, setCartOpen] = useState(false);

    const onCartButtonOpen = () => {
        setCartOpen(!isCartOpen);
    }

    const onCartButtonClose = () => {
        setCartOpen(!isCartOpen);
    }
    
 
    return ( 
        <>
            {isCartOpen && <Cart callbackApp={() => onCartButtonClose()} />}
            <Menu callbackApp={() => onCartButtonOpen()} />
                <Container>
                    <Routes /> 
                </Container>
           
        </>
    ) 
    

}

