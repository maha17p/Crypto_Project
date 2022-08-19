import {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`
    *, *::after,*::before {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
    }
    body {
        background: ${({theme}) => theme.bg};
        color: ${({theme}) => theme.text};
        font-size: 0.875rem;
        font-family: 'Poppins',sans-serif;
       overflow-x: hidden;

        
    }
    
    h1,h2,h3,h4 {
        font-family: 'Roboto', sans-serif;
    }
`;


export default GlobalStyle;