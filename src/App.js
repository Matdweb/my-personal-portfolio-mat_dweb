import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { SkillsContextProvider } from "./context/SkillsContext"
import { PriceCards } from "./components/Price-cards"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <SkillsContextProvider>
        <Skills />
      </SkillsContextProvider>
      <Projects />
      <PriceCards />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
