import React from 'react';
import CharacteCardTitle from './CharacterCardTitle/CharacterCardTitle';
import CharacterCardAttrs from './CharacterCardAttrs/CharacterCardAttrs';
import {CharacterCardContainer} from '../../StyledComponents/CardStyles';

const CharacterCard = props => {
    const {name} = props.character;

    return(
        <CharacterCardContainer>
            <CharacteCardTitle name={name} />
            <CharacterCardAttrs attrs={props.character} />
        </CharacterCardContainer>
    )    
}

export default CharacterCard;