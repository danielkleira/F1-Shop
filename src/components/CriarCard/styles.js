import styled from "styled-components"

export const Lista = styled.li`
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    margin-bottom: 50px;
    background-color: #FFFFFF;
    justify-content: space-between;
    align-items: center;
    figure{
        margin: 0;
        width: 100%;
        height: 150px;
    }
    
    img{
        margin-top: 10px;
        width: 200px;
        max-height: 200px;
    }
    div{
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        width: 90%;
    }
    div>p{
        font-weight: 500;
        text-align: start;
        height: 80px;
        margin: 10px;
        margin-bottom: 10px;
    }
    div>span{
        font-weight: 700;
        font-size: 18px;
        text-align: start;
        margin: 10px;
    }
   
    @media (max-width: 1024px){
        margin-right: 0;
    }
`