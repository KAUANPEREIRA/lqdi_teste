import {
  BannerContainer,
  BannerContent,
  BannerImages,
  BannerText,
  ContentImageEdificios,
  ContentImagePhone,
} from "./style";

import computer from "../../assets/computer.png";
import edificios from "../../assets/edificios.png";
import escritorio from "../../assets/escritorio.png";
import phone from "../../assets/phone.png";
export const Banner = () => {
  return (
    <BannerContainer>
      <BannerContent>
        <BannerText>
          <h3>
            Construímos estratégias, design e tecnologia de ponta para o seu
            negócio
          </h3>
          <span>Converse com nossa equipe sobre o seu projeto.</span>
          <button>Começar</button>
        </BannerText>
        <BannerImages>
          <ContentImagePhone>
            <img src={phone} style={{ height: "268px" }} />
            <img
              src={escritorio}
              style={{ marginLeft: "20px", marginTop: "100px" }}
            />
          </ContentImagePhone>

          <ContentImageEdificios>
            <img src={edificios} style={{ marginTop: "-150px" }} />
            <img
              src={computer}
              style={{ height: "268px", marginLeft: "-580px" }}
            />
          </ContentImageEdificios>
        </BannerImages>
      </BannerContent>
    </BannerContainer>
  );
};
