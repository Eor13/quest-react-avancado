import styled from 'styled-components';

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
export const H2 = styled.h2`
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
export const Span = styled.span`
    text-transform: uppercase;
`

export const Container=styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 100%;
  gap: 10px;
  overflow-y: scroll;
  @media(max-width:830px){
    overflow-y: scroll;
  }
`
export const Pokemon = styled.li`
  border: 4px double #A31717;
  width: 18%;
  padding: 5px;
  list-style: none;
  text-align: center;
  &:hover{
    background-color: rgb(230, 198, 156);
    color: brown;
  }
  @media(max-width:830px){
    width: 25%;    
  }
  @media(max-width:600px){
    width: 40%;    
  }
  @media(max-width:400px){
    width: 70%;    
  }
}
`
export const Img = styled.img`
  width: 95%; 
  @media(max-width:800px){
    width: 92%;    
  } 
  @media(max-width:400px){
    width: 90%;    
  }
  `
export const Information = styled.p`
  color: #5C2C2C;
`
export const Btn = styled.div`
    color: #DB6767;
    background-color: #5C2C2C;
    padding: 8px;
    border-radius: 10px;
    transition: 0.8s;
    &:hover{
        background-color: #A31717;
        color: beige;
    }
`
