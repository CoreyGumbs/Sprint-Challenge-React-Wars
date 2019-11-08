import React, {useState, useEffect} from 'react';
import CharacteCardTitle from './CharacterCardTitle/CharacterCardTitle';

const CharacterCard = props => {
    console.log(props);
    const {name, gender, eye_color, hair_color, mass, height, skin_color, birth_year} = props;


    return(
        <div>
            <CharacteCardTitle name={name} />
        </div>
    )    
}

export default CharacterCard;