import styled from "styled-components";
export const FooterContainer = styled.footer`
  width: 100%;

  background-color: black;
  height: 320px;
`;

export const FooterContent = styled.div`
  width: 1200px;
  padding: 30px;
  margin: auto;

  display: flex;
  justify-content: space-between;
`;

export const FooterLocalization = styled.div`
  width: 500px;
  display: flex;
  font-family: "Plus Jakarta Sans", sans-serif;

  h3 {
    color: rgba(255, 255, 255, 1);
  }

  span {
    font-weight: 700;
    color: rgba(255, 255, 255, 1);
  }
`;
