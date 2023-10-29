import styled from "styled-components";

export const BannerContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
`;

export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  width: 505px;
  height: 330px;

  h3 {
    font-size: 36px;
    font-family: "Plus Jakarta Sans", sans-serif;
  }

  span {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 20px;
    font-weight: 500;
    color: rgba(8, 17, 30, 1);
  }

  button {
    width: 150px;
    min-height: 52px;
    border-radius: 40px;
    background-color: rgba(10, 178, 183, 1);
    color: white;
    margin-top: 20px;
    border: none;
    cursor: pointer;
  }
`;

export const BannerContent = styled.div`
  display: flex;
`;

export const BannerImages = styled.div`
  width: 881px;
  height: 702px;
`;

export const ContentImagePhone = styled.div`
  display: flex;
`;

export const ContentImageEdificios = styled.div`
  display: flex;
`;
