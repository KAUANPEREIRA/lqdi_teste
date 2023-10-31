import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { GrFormNextLink } from "react-icons/gr";
import { articles } from "../../types/articles";
import {
  ArticlesCards,
  ArticlesContainer,
  ArticlesContent,
  ArticlesDescription,
  ArticlesTitle,
  InputEmail,
  ListMediasSociais,
  RegisterEmails,
  SociaisMedias,
} from "./style";

export const Articles = () => {
  return (
    <ArticlesContainer>
      <ArticlesContent>
        {articles.map((item, index) => {
          return (
            <ArticlesCards key={index}>
              <img src={item.imagen} />
              <ArticlesTitle>{item.title}</ArticlesTitle>
              <ArticlesDescription>{item.description}</ArticlesDescription>
              <h3>
                {" "}
                ir para o artigo <GrFormNextLink size={20} />
              </h3>
            </ArticlesCards>
          );
        })}
        <RegisterEmails>
          <h1>Receba os nossos artigo de interesse na sua caixa de entrada.</h1>

          <InputEmail placeholder="Escreva aqui seu email" />
          <SociaisMedias>
            <span>Siga-nos em nossas mídias sociais</span>
          </SociaisMedias>
          <ListMediasSociais>
            <li>
              <BsInstagram />
            </li>
            <li>
              <AiFillFacebook />
            </li>
            <li>
              <BsLinkedin />
            </li>
          </ListMediasSociais>
        </RegisterEmails>
      </ArticlesContent>
    </ArticlesContainer>
  );
};
