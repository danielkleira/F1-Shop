import { useDispatch, useSelector } from "react-redux";
import { addToCartThunk } from "../../store/modules/cart/thunks";
import { Lista } from "./style"
import { Button } from '@material-ui/core';

const CriaCard = ({product}) =>{

    const dispatch = useDispatch()
    const {cart} = useSelector(state => state)
    const {id,src,name,price} = product
    console.log(name)
    console.log(product)
    
    const handleClick = () =>{
        const conflito = cart.filter(product => product.id === id)
        console.log(!conflito)
        console.log(conflito)
        console.log(conflito.length)
        !conflito.length &&
        dispatch(addToCartThunk(product))
    }

    return(
        <Lista key={id} id={id}>
            <figure>
            <img src={src} alt={name}/>
            </figure>
            <div>
                <p>{name}</p>
                <span>R$ {price.toFixed(2)}</span>
            </div>
            <Button variant='contained' color='primary' size='large' onClick={handleClick}>Adicionar ao carrinho</Button>
        </Lista>
        
    )
}

export default CriaCard

