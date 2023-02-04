import styled from 'styled-components';

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
export const Pokemons = styled.li`
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
export const Informations = styled.p`
  color: #5C2C2C;
`
export const Button = styled.button`
  background-color: #5C2C2C;
  color: #DB6767;
  width: 120px;
  height: 30px;
  border-radius: 15px;
  border: 1px none black;
  padding: 8px;
  transition: 0.8s;
  &:hover{
      background-color: #A31717;
      color: beige;
  }
`