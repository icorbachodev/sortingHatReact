import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        height: 100%;
    }

    body {
        font-family: "Oswald", Helvetica Neue;
        background: no-repeat url('https://i.etsystatic.com/12444298/r/il/d3efc1/1895556172/il_fullxfull.1895556172_fda8.jpg');
        background-size: cover;
        box-shadow: inset 0 0 0 100vmax rgba(0, 0, 0, .6);
        min-height: 100%;
        color: #333;
    }
`;

export default GlobalStyles;
