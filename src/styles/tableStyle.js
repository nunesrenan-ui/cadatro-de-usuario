import styled from "styled-components";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  margin-top: 10vh;
  text-align: center;

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
`;
