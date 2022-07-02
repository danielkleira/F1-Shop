import styled from "styled-components"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {ImEnter} from 'react-icons/im'

export const Cabecalho = styled.header`
    
    width: 100%;
    box-sizing: border-box;
    background-color: white;
    border-bottom: 2px solid #EBEBEB;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10%;
    padding-right: 10%;
    position: fixed;
    h1{
        cursor: pointer;
        font-size: 18px;
        font-weight: 400;
    }
    button{
        font-size: 18px;
        cursor: pointer;
        display: flex;
        background-color: transparent;
        border: none;
    }
    button>div{
        background-color: #033863;
        font-weight: 500;
        font-size: 9px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 15px;
        height: 15px;
        position: relative;
        left: 25px;
        border-radius: 50px;
        top: -8px;
    }

    span{
        display: flex;
        flex-direction: row;
    }

    
`
export const IconeEntra=styled(ImEnter)`
    cursor:pointer;
    color:grey;
    margin-right: 20px;
    margin-left: 15px;
`

export const IconeCarrinho = styled(AiOutlineShoppingCart)`
    cursor: pointer;
    color:grey;
    margin-right: 20px;
`