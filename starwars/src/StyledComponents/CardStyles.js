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
    margin: 10% auto;
    font-size: 5rem;
    font-family: 'Press Start 2P', cursive;
    color: #999;
`;

export const CharacterCardContainer = styled.section`
    width: 50%;
    padding: 0 20px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`;

export const CharacterCardTitleHeading = styled.h1`
    width: 100%;
    margin: 0;
    padding: 20px 20px;
    background-color: darkblue;
    text-align: center;
    font-size: 2.5rem;
    font-family: 'Press Start 2P', cursive;
    color: yellow;
`;

export const CharacterCardAttrsContainer = styled.div`
    width: 100%;
`;


export const CharacterCardAttrsTxt = styled.p`
    padding: 0 10px;
    font-size: 2rem;
    line-height: 2;

`;