import styled from "styled-components";
export const Section = styled.section`

  h2 {
    color: var(--title);
    font-size: 2rem;
    line-height: 3.2rem;
    margin-bottom: 1rem;
    font-family: "Poppins",sans-serif;
  }
  p {
    font-size: 1.2em;
    font-family: "Raleway",sans-serif;
    color: var(--text-body);
    line-height:35px;
  }

  button {
    border: 0;
    width: 100%;
    height: 56px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 5px;
    color: white;
    font-family: "Poppins",sans-serif;
    margin-top: 2rem;
    transition: all 0.2s ease;
    text-transform: uppercase;
    background: linear-gradient(231.42deg, #00A8BA -43.99%, rgba(20, 198, 148, 0) 211.66%);
    transition: all 0.2s ease;
    &:hover{
        filter: brightness(0.9);
    }
  }
`;
