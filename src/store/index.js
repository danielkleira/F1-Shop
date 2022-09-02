import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import cartReducer from "./modules/cart/reducer";
import products from './modules/products/reducer'

const reducers= combineReducers({products: products, cart:cartReducer })

const store = createStore(reducers, applyMiddleware(thunk));

export default store;