import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-20 flex flex-col gap-8">
        <Home />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
