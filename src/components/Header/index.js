import { useHistory } from "react-router-dom";
import {IconeCarrinho, Cabecalho, IconeEntra} from './style'
import { useSelector } from "react-redux";


const Header=()=>{
    const history =useHistory()
    const {cart}= useSelector(store=> store)


    const paraCarrinho=()=>{
        history.push('/carrinho')
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
