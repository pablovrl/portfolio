import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-20 flex flex-col gap-20">
        <Home />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
