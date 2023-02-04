import { Pokedex } from '../components/pokedexList';
import * as Styled from './style';
const Home =() =>{
    return(
        <>
            <Styled.PageTitle>Pokedex</Styled.PageTitle>
            <Styled.Section>
                <Pokedex/>
            </Styled.Section>
        </>
    )
}

export { Home }