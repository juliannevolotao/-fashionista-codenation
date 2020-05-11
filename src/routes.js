import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Index from './Pages/Index';
import Product from './Pages/Product';

export default class routes extends React.Component {

    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={Index} />
                    <Route path="/produto/:id" exact={true} component={Product} />

                </Switch>
            
            </BrowserRouter>


        )
    }
}