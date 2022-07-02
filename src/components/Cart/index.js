import { ListaCarrinho, Container, DivTitulo } from "./styles"
import { Button } from "@material-ui/core"
import { useContext } from "react"
import { CartContext } from "../../providers/cartProducts"

const Cart = () =>{
    const {cart, removeFromCart} = useContext(CartContext)

    const handleRemove=(item)=>{
        removeFromCart(item)
    }
    
    return (
        <>
        <Container>
                <ListaCarrinho>
                <DivTitulo>
                    <p>Produto</p>
                    <span>Preço</span>
                </DivTitulo>
                    {cart.length > 0? 
                    cart.map(product => 
                    <li key={product.id} id={product.id}>
                        <figure>
                            <img src={product.src} alt={product.name}/>
                        </figure>
                        <p>{product.name}</p>
                        <span>R$ {product.price.toFixed(2)}</span>
                        <button onClick={(()=>handleRemove(product.id))}>x</button>
                    </li>
                    )
                    :
                    <li><h1>Carrinho vazio</h1></li>
                }
                </ListaCarrinho>
            

            {cart.length > 0 && 
             <section>
                <h3>Resumo do pedido</h3>
                <p>{cart.length} produtos <span>R$ {cart.reduce((acc,produto) => acc + produto.price ,0).toFixed(2)}</span></p>
                <Button  variant='contained' color='primary' size='large'>Finalizar Pedido</Button>
            </section>
            }
           
        </Container>

        </>
    )
}

export default Cart