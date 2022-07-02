import { useHistory } from "react-router-dom";
import {IconeCarrinho, Cabecalho, IconeEntra} from './styles'
import { CartContext } from "../../providers/cartProducts";
import { useContext } from "react";


const Header=()=>{
    const history =useHistory()
    const {cart}= useContext(CartContext)


    const paraCarrinho=()=>{
        history.push('/cart')
    }

    const paraHome=()=>{
        history.push('/')
    }
    
    const paraLogin=()=>{
        history.push('/login')
    }

    return(
        <>
        <Cabecalho>
            <h1 onClick={paraHome}>KenzieShop </h1>
            

            <span>
            <button onClick={paraCarrinho}>{cart.length > 0  &&<div>{cart.length}</div>}            

            <IconeCarrinho/>Carrinho</button>
            <button  onClick={paraLogin}><IconeEntra/>Entrar</button>
            </span>
        </Cabecalho>
        
        </>
    )
}

export default Header
