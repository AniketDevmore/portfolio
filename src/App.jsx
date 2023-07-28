import "./App.css";
import Footer from "./components/footer/Footer";
import MainPage from "./components/mainPage/MainPage";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <MainPage />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
