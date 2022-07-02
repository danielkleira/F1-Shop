import { CartProvider } from "./cartProducts";
import { ProductsProvider } from "./products";

const Providers=({children})=>{
    return(
        <CartProvider>
            <ProductsProvider>{children}</ProductsProvider>
        </CartProvider>
    )
}

export default Providers