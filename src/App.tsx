import { AppBanner, AppContainer } from "./Appstyle";
import { Articles } from "./components/Articles";
import { Banner } from "./components/Banner";
import { ContentForm } from "./components/ContentForm";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <AppContainer>
      <AppBanner>
        <Header />
        <Banner />
      </AppBanner>
      <Articles />
      <ContentForm />
      <Footer />
    </AppContainer>
  );
}

export default App;
