import React from 'react';
import Routes from './routes';

import './StylesGlobal/global.sass';

import Menu from './Components/Menu';
import Footer from './Components/Footer';
import Container from './Components/PageContainer';

export default class app extends React.Component {

    render() { 
        return ( 
            <>
                <Menu />
                    <Container>
                        <Routes /> 
                    </Container>
                {/* <Footer /> */}
            </>
        ) 
    }

}

