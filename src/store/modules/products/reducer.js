import ferrari from '../../../assests/ferrari.jpg';
import alfaromeo from '../../../assests/AlfaRomeo.jpg';
import alpine from '../../../assests/alpine.jpg';
import haas from '../../../assests/haas.jpeg';
import mclaren from '../../../assests/mcLaren.jpg';
import mercedes from '../../../assests/mercedes.jpg';
import redbull from '../../../assests/redbull.jpg';
import williams from '../../../assests/williams.jpg';

const initialState=[
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
]



const products=(state=initialState, action)=>{
    return state
}

export default products