import React from 'react';
import {CharacterCardAttrsContainer, CharacterCardAttrsTxt} from '../../../StyledComponents/CardStyles';

const CharacterCardAttrs = props => {
   const { gender, eye_color, hair_color, mass, height, skin_color, birth_year} = props.attrs;

    return(
        <CharacterCardAttrsContainer>
            <CharacterCardAttrsTxt>Birth Date: {birth_year}</CharacterCardAttrsTxt>
            <CharacterCardAttrsTxt>Gender: {gender}</CharacterCardAttrsTxt>
            <CharacterCardAttrsTxt>Mass: {mass}</CharacterCardAttrsTxt>
            <CharacterCardAttrsTxt>Height: {height}</CharacterCardAttrsTxt>
            <CharacterCardAttrsTxt>Hair Color: {hair_color}</CharacterCardAttrsTxt>
            <CharacterCardAttrsTxt>Eye Color: {eye_color}</CharacterCardAttrsTxt>
            <CharacterCardAttrsTxt>Skin Color: {skin_color}</CharacterCardAttrsTxt>
        </CharacterCardAttrsContainer>
    )
}

export default CharacterCardAttrs;