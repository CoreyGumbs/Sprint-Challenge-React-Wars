import React from 'react';


const CharacterCardTitle = props => {
    const {name} = props;
    return(
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default CharacterCardTitle;