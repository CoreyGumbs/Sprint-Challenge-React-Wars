import React from 'react';
import {CharacterCardTitleHeading} from '../../../StyledComponents/CardStyles';


const CharacterCardTitle = props => {
    const {name} = props;

    return(
        <React.Fragment>
            <CharacterCardTitleHeading>{name}</CharacterCardTitleHeading>
        </React.Fragment>
    )
}

export default CharacterCardTitle;