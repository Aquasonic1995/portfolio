import "./App.css";
import Header from "./components/Header/Header.tsx";
import About from "./components/About/About.tsx";
import Skills from "./components/Skills/Skills.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Footer from "./components/Footer/Footer.tsx";

const App = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;
