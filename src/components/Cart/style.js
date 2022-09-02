import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 60%;
    justify-content: space-between;
    margin-top: 100px;
    align-items: center;
    gap:5px;
    section{
        width: 80%;
        background-color: white;
        height: 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: center;
        justify-content: space-between;
    }
    section>p ,span{
        font-weight: 600;
    }
    section h3{
        width: 100%;
        height: 30px;
    }

    section> p{
        display: flex;
        width: 100%;
        flex-direction: column;
    }
    p{
        width: 100%;
        margin: 0;
        display: flex;
        justify-content: space-around;
    }

    @media(max-width:540px){
       display: flex;
       flex-direction: column;
       height: 250px;
   }  
`

export const DivTitulo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    border: 2px solid #FDFFFC;
    border-bottom: none;
    background-color: white;
    
    p{
        font-weight: 700;
        width: 100px;
    }
    
`

export const ListaCarrinho = styled.ul`
    width: 70%;
    display: flex;
    flex-direction: column;
    list-style: none;
    box-sizing: border-box;
    background-color: #FFF;
    margin-bottom: 50px;
    li{
        box-sizing: border-box;
        justify-content: space-between;
        display: flex;
        width: 100%;
        height: 350px;
        border: 1px solid #F5F5DC;
        align-items: center;
        padding-right: 10px;
        height: 220px;
    }
    button{
        border: none;
        border-radius: 100%;
        justify-content: center;
        margin-left: 20px;
        cursor: pointer;
    }
    li h1{
        display: flex;
        width: 100%;
        justify-content: center;
    }
    span{
        width: 100px;
    }
    p,span{
        font-weight: 700;
    }
    figure{
        margin:0;
    }
    li img{
        width: 200px;
        max-height: 200px;
    }
    @media(max-width:1012px){
       li{
        
       display: flex;
       flex-direction: column;  
       }
   }  
   

`