import styled from 'styled-components';


export const CardContainer = styled.section`
    width: 60%;
    margin: 20px auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
`;

export const CardLoading = styled.h1`
    width: 50%;
    margin: 25% auto;
    padding: 0;
    font-size: 8rem;
    font-family: 'Press Start 2P', cursive;
    color: yellow;
`;

export const CharacterCardContainer = styled.section`
    width: 45%;
    margin: 20px 2%;
    padding: 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    border: 2px solid darkblue;
    border-radius: 50px;
    background-color: white;
`;

export const CharacterCardTitleHeading = styled.h1`
    width: 100%;
    margin: -10px 0;
    padding: 20px 20px;
    background-color: darkblue;
    text-align: center;
    font-size: 2.4rem;
    font-family: 'Press Start 2P', cursive;
    color: yellow;
    border-radius: 5px 5px 50px 50px;
`;

export const CharacterCardAttrsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
`;


export const CharacterCardAttrsTxt = styled.p`
    width: 80%;
    padding: 0 20px;
    font-size: 2.5rem;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    line-height: 1;

`;