import Container from "./components/Container";
import DownloadSection from "./components/DownloadSection";

import Footer from "./components/Footer";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="font-rabar">
      <Container>
        <Intro />
        <DownloadSection />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
