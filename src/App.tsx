import { AppBanner, AppContainer } from "./Appstyle";
import { ArticlesContent } from "./components/Articles/style";
import { Banner } from "./components/Banner";
import { Header } from "./components/Header";

function App() {
  return (
    <AppContainer>
      <AppBanner>
        <Header />
        <Banner />
      </AppBanner>
      <ArticlesContent />
    </AppContainer>
  );
}

export default App;
