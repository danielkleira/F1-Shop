
import CriaCard from "../CriarCard"
import { ProductsContext } from "../../providers/products"
import { useContext } from "react"
import { ListaStyled } from "./styles"

const Vitrine = () =>{

    const {products} = useContext(ProductsContext)

    return(
        <ListaStyled>
            {products.map((product) =>  
                <CriaCard key={product.id} product={product}/>
            )}
        </ListaStyled>
    )
}

export default Vitrine