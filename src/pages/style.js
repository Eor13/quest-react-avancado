import styled from "styled-components";


export const Div = styled.div`
    min-height:100vh
`
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:auto;
    width: 100vw;
    max-width: 1440px;
    row-gap: 10px;
    @media(max-width:500px){
        width: 95vw;    
    }
`
export const PageTitle = styled.h1`
    text-align: center;
    box-shadow: 0px 2px 15px black;
    width: 95%;
    font-size: 3.5rem;
    border-radius: 8px;
    margin-top: 10px;
    color: #DB6767;
    @media(max-width:830px){
        font-size: 3rem;
        width: 90%;
    }
    @media(max-width:500px){
        font-size: 2.5rem;
        width: 85%;
    }
`
export const Section = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #DB6767;
    border-radius: 10px;
    width: 70%;
    max-height: 70vh;
    align-items: center;
    justify-content: center;
    padding: 5px 15px;
    gap: 10px;
    margin-top: 5px;
    @media(max-width:500px){
        max-height: 75vh;
    }
`