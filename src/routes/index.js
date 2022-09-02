import React from "react";
import { Route, Switch} from "react-router-dom";
import Carrinho from '../pages/Carrinho'
import Home from '../pages/home'
import Login from '../pages/Login'

const Routes=()=> {
    return(
        <Switch>
            <Route exact path={'/'}>
            <Home/>
            </Route>

            <Route exact path={'/carrinho'}>
                <Carrinho/>
            </Route>

            <Route exact path={'/login'}>
                <Login/>
            </Route>

        </Switch>
    )
}

export default Routes;