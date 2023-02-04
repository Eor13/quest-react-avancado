import styled from "styled-components";

export const Button = styled.button`
    border: 1px solid #DB6767;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    cursor:pointer;

    @media(max-width:830px){
        width: 75px;
        height: 75px;    
    }
    @media(max-width:500px){
        width: 45px;
        height: 45px;    
    }

`
export const Img = styled.img`
    width: 90%;
`