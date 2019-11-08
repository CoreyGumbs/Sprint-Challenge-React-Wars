import React from 'react';


const CharacterCardAttrs = props => {
   const { gender, eye_color, hair_color, mass, height, skin_color, birth_year} = props.attrs;

    return(
        <div>
            <p>Birth Date: {birth_year}</p>
            <p>Gender: {gender}</p>
            <p>Mass: {mass}</p>
            <p>Height: {height}</p>
            <p>Hair Color: {hair_color}</p>
            <p>Eye Color: {eye_color}</p>
            <p>Skin Color: {skin_color}</p>
        </div>
    )
}

export default CharacterCardAttrs;