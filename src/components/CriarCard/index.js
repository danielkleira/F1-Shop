import { Lista } from "./styles"
import { Button } from '@material-ui/core';
import { CartContext } from "../../providers/cartProducts";
import { useContext } from "react";

const CriaCard = ({product}) =>{

    const {cart,addToCart}= useContext(CartContext);

    const {id,src,name,price}=product;
    
    
    const handleClick = () =>{
        const conflito = cart.filter(product => product.id === id)
        if(!conflito.lenght){
            addToCart(product)
        }
        
        
       
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
