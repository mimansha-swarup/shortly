import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');
  body {
    font-family: 'Poppins', sans-serif;
    margin:0;
    padding: 0;
    font-size: 18px;
    overflow-x: hidden;
    /* width: 100%; */
  }
  html{
    overflow-x: hidden;
    
    width: 100%;
  }
  :root{
    width: 100%;
  }
  `
  export default GlobalStyles;