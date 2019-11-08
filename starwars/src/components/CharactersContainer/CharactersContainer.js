import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';


const CharactersContainer = props => {
    const {characters} = props;
  
    //loading 
    if(characters.length === 0) return (
        <div className="">Loading...</div>
    )

    return(
        <div>
            {characters.map( (character, idx) => (
                <CharacterCard key={idx} character={character} />
            ))}
        </div>
    )
}


export default CharactersContainer;