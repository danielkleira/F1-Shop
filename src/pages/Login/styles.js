import styled from "styled-components"

export const Container = styled.header`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: white;
    align-self: center;
    justify-content: center;


    form{
        background-color: #EBEBEB;
        width: 50%;
        align-self: center;
        border-radius: 10px;
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:20px
    }

    button{
        width: 50%;
        margin-top: 40px;
    }
`