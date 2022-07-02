import { Switch, Route } from "react-router-dom";
import Carrinho from '../pages/cart'
import Home from '../pages/home'

export const Routes=()=>{
    return(
        <Switch>
            <Route exact path={'/'}>
                <Home/>
            </Route>

            <Route exact path={'/cart'}>
                <Carrinho/>
            </Route>

        </Switch>
    )
}