import { useSelector } from "react-redux"
import CriaCard from "../CriaCard"
import { ListaStyled } from "./style"

const Vitrine = () =>{

    const {products} = useSelector(store => store)

    return(
        <ListaStyled>
            {products.map((product) =>  
                <CriaCard key={product.id} product={product}/>
            )}
        </ListaStyled>
    )
}

export default Vitrine