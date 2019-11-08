import { createGlobalStyle} from 'styled-components';
import img from '../imgs/vader-bg.jpg';

const GlobalStyles = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC|Press+Start+2P|Yanone+Kaffeesatz&display=swap');

    * {
        font-size: 62.5%;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background-color: black;
        background: black url(${img}) top center no-repeat fixed;
    }

`;

export default GlobalStyles;