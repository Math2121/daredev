import { createGlobalStyle } from "styled-components";

export const GlobaStyle = createGlobalStyle`

:root{
    --background:#090B0E;
    --button:#1F252B;
    --green:#14CC99;
    --title:#D1D3D5;
 
    --text-body:#6A829D;
 
}
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
html{
    @media (max-width:1080px){
        font-size:93.75%;// 15px
    }
    @media (max-width:720px){
        font-size:87.5%;// 14px
    }
}
body{
    background: var(--background);
    -webkit-font-smoothing:antialiased;
}

button{
    cursor:pointer;
}
.intro-values {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    .line {
      height: 2.5rem;
      width: 0.5rem;
      background: var(--green);
    }
    h1 {
      color: var(--title);
      font-size: 3rem;
      font-family: "Poppins",sans-serif;
    }
  }
`;
