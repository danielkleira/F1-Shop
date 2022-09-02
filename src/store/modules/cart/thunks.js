import {addToCart, removeCart} from './actions';

export const addToCartThunk=(product)=>(dispatch)=>{
    const list =JSON.parse(localStorage.getItem('@kenzieShop:cart')) || [];

    const newList = [...list,product];

    localStorage.setItem('@kenzieShop:cart', JSON.stringify(newList));

    dispatch(addToCart(product));
}

export const removeCartThunk=(id)=> (dispatch,getState)=>{
    const {cart}= getState()

    const list = cart.filter(product=> product.id !==id)

    localStorage.setItem('@kenzieShop:cart', JSON.stringify(list))

    dispatch(removeCart(list))

}