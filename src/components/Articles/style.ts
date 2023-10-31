import styled from "styled-components";
export const ArticlesContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
`;
export const ArticlesContent = styled.div`
  padding: 20px;
  display: flex;
  margin-top: 400px;
`;
export const ArticlesCards = styled.div`
  padding: 20px;
  width: 317px;
  height: 556px;

  h3 {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 15px;
    font-weight: 800;
    color: black;
    cursor: pointer;
  }
`;

export const ArticlesTitle = styled.h3`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 24px;
  font-weight: 700;
`;

export const ArticlesDescription = styled.span`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 16px;
  color: rgba(8, 17, 30, 1);
`;

export const GoArticle = styled.span`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 16px;
  font-weight: 800;
`;

export const RegisterEmails = styled.div`
  width: 480px;
  height: 544px;
  background-color: black;
  border-radius: 19px;
  margin-top: 20px;

  h1 {
    padding: 20px;
    width: 297px;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 32px;
    font-weight: 600;
    color: #fff;
  }
`;

export const InputEmail = styled.input`
  display: flex;
  margin-left: 20px;
  color: rgba(255, 255, 255, 1);
  align-items: center;
  font-family: "Plus Jakarta Sans", sans-serif;
  width: 393px;
  height: 48px;
  border-radius: 50px;
  border: 2px solid rgba(255, 255, 255, 1);
  background-color: black;

  outline: 0;

  &::placeholder {
    text-align: center;
  }
`;

export const SociaisMedias = styled.div`
  display: flex;
  flex-direction: column;
  span {
    width: 117px;
    padding: 20px;
    font-size: 15px;
    font-weight: 500;
    font-family: "Plus Jakarta Sans", sans-serif;
    color: rgba(255, 255, 255, 1);
  }
`;

export const ListMediasSociais = styled.ul`
  display: flex;
  li {
    margin-right: 10px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #fff;
    display: grid;
    place-items: center;
  }
`;
