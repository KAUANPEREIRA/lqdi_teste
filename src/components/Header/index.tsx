import logo from "../../assets/logo.png";
import { HeaderContainer, HeaderContent } from "./style";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} />
        <div>
          <span>Agende uma reunião conosco</span>
          <button>Começar</button>
        </div>
      </HeaderContent>
    </HeaderContainer>
  );
};
