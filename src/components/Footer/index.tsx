import imgLogo from "../../assets/logoFooter.png";
import { FooterContainer, FooterContent, FooterLocalization } from "./style";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <img src={imgLogo} style={{ height: "47px" }} />
        <FooterLocalization>
          <div style={{ width: "227px", height: "100px" }}>
            <h3>
              <b>Brasil</b>
            </h3>

            <span>
              Rua da Consolação, 4393º andar, Consolação São Paulo +55 11
              3280-0283
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ width: "227px", height: "100px" }}>
              <h3>
                <b>Portugal</b>
              </h3>

              <span>Av. República Nº6 - 1º Andar Lisboa +351 916 029 443</span>
            </div>

            <div style={{ width: "227px", height: "100px" }}>
              <h3>
                <b>Holanda</b>
              </h3>

              <span>
                Jasykoffstraat 631506AT ZaandamThe Netherlands +31 622 333 744
              </span>
            </div>
          </div>
        </FooterLocalization>
      </FooterContent>
    </FooterContainer>
  );
};
