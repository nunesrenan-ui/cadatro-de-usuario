import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  margin: 0 auto;
  margin-top: 35vh;
  padding: 10px;
  background-color: white;
  color: black;
  border-radius: 10px;

  div {
    padding: 10px;
  }

  button {
    border-radius: 10px;
    color: white;
    background-color: blue;
  }
  button:hover {
    cursor: pointer;
    background-color: lightblue;
    color: black;
  }

  span {
    font-size: 0.8rem;
    color: red;
  }
`;
