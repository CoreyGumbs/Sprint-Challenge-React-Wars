import React from 'react';


const Characters = props => {
    console.log(props);
    
    //loading 
    if(props.characters.length === 0) return (
        <div className="">Loading...</div>
    )

    return(
        <div>
            characters
        </div>
    )
}


export default Characters;