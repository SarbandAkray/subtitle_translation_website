import Container from "./components/Container";
import FileUpload from "./components/FileUpload";
import Footer from "./components/Footer";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="font-rabar">
      <Container>
        <Intro />
        <FileUpload />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
