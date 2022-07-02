import ferrari from '../../assets/ferrari.jpg';
import alfaromeo from '../../assets/AlfaRomeo.jpg';
import alpine from '../../assets/alpine.jpg';
import haas from '../../assets/haas.jpeg';
import mclaren from '../../assets/mcLaren.jpg';
import mercedes from '../../assets/mercedes.jpg';
import redbull from '../../assets/redbull.jpg';
import williams from '../../assets/williams.jpg';

import { useState } from 'react';
import { createContext } from 'react';
export const ProductsContext= createContext([])


export const ProductsProvider=({children})=>{
    const [products]=useState([
        {
            name:'Ferrari',
            price:75000000,
            src:ferrari,
            id:1
        },
        {
            name:'Alfa Romeo',
            price:60000000,
            src:alfaromeo,
            id:2
        },
        {
            name:'Alpine',
            price:60000000,
            src:alpine,
            id:3
        },
        {
            name:'Haas',
            price:55000000,
            src:haas,
            id:4
        },
        {
            name:'McLaren',
            price:60000000,
            src:mclaren,
            id:5
        },
        {
            name:'Mercedes',
            price:80000000,
            src:mercedes,
            id:6
        },
        {
            name:'RedBull',
            price:75000000,
            src:redbull,
            id:7
        },
        {
            name:'Williams',
            price:50000000,
            src:williams,
            id:8
        },
    ]);

    return(
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}

