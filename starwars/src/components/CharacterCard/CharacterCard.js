import React from 'react';
import CharacteCardTitle from './CharacterCardTitle/CharacterCardTitle';
import CharacterCardAttrs from './CharacterCardAttrs/CharacterCardAttrs';

const CharacterCard = props => {
    const {name} = props.character;

    return(
        <div>
            <CharacteCardTitle name={name} />
            <CharacterCardAttrs attrs={props.character} />
        </div>
    )    
}

export default CharacterCard;