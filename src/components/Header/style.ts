import styled from "styled-components";
export const HeaderContainer = styled.header`
  max-width: 1200px;
  width: 100%;
  background-color: rgba(231, 235, 238, 1);
  margin: auto;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  span {
    font-size: 15px;
    font-weight: 600;
    font-family: "Plus Jakarta Sans", sans-serif;
    color: rgba(0, 0, 0, 0.7);
    margin-right: 20px;
  }

  button {
    width: 119px;
    height: 49px;
    border-radius: 40px;
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-weight: 600;
  }
`;
