import { createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`

    * {
        font-size: 62.5%;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background-image: url('../sw-bg.jpg');
        background-size: cover;
    }

`;

export default GlobalStyles;