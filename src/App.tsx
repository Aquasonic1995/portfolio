import "./App.css";
import Header from "./components/Header/Header.tsx";
import About from "./components/About/About.tsx";
import Skills from "./components/Skills/Skills.tsx";
import Projects from "./components/Projects/Projects.tsx";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
      </main>
    </>
  );
};

export default App;
