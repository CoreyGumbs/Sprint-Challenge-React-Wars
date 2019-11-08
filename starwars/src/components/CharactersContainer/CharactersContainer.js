import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import {CardContainer, CardLoading} from '../../StyledComponents/CardStyles';

const CharactersContainer = props => {
    const {characters} = props;
  
    //loading 
    if(characters.length === 0) return (
        <CardContainer>
            <CardLoading>Loading...</CardLoading>
        </CardContainer>
    )

    return(
        <CardContainer>
            {characters.map( (character, idx) => (
                <CharacterCard key={idx} character={character} />
            ))}
        </CardContainer>
    )
}


export default CharactersContainer;