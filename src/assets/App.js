import About from "./componets/About";
import Contact from "./componets/Contact";
import Home from "./componets/Home";
import Navbar from "./componets/Navbar";
import Skills from "./componets/Skills";
import Work from "./componets/Work";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;