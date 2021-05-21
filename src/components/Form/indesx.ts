import styled from "styled-components";

export const Container = styled.form`
  max-width: 521px;
  width: 100%;
  margin: 0 auto;
  border-radius: 0.5rem;
  background: #191e25;
  margin-bottom: 2rem;
  .input-group {
    display: flex;

    align-items: flex-start;
    padding: 2rem;
    flex-direction: column;
    justify-content: flex-start;
    label {
      text-align: left;
      color: var(--title);
      margin-bottom: 0.8rem;
      font-family: "Poppins", sans-serif;
    }
    input {
      height: 3rem;
      width: 100%;
      background: #1f262f;
      border: 0;
     
    }
    &::placeholder {
      font-family: "Raleway", sans-serif;
      padding:1rem;
    }
  }
`;
