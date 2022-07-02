import {createContext, useState } from 'react';

export const CartContext = createContext([]);

export const  CartProvider=({children})=>{
        const [cart,setCart]=useState(JSON.parse(localStorage.getItem('@kenzieshop:cart')) || []);

        const addToCart=(item)=>{
            const itens= JSON.parse(localStorage.getItem('@kenzieShop:cart')) || []
            itens.push(item)
            setCart(itens)

            localStorage.setItem('@kenzieShop:cart', JSON.stringify(itens))
        }

        const removeFromCart= (item)=>{
            const newCart=cart.filter(
                (itemOnCart)=> itemOnCart.name !== item.name);
                localStorage.setItem('@kenzieShop:cart',JSON.stringify(newCart))
                setCart(newCart)
            
        };

        return(
            <CartContext.Provider
            value={{cart,addToCart,removeFromCart}}>
                {children}
            </CartContext.Provider>
        )
}

