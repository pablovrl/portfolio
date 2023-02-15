import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <div className="px-4 pt-20 flex flex-col gap-8">
        <Home />
        <Projects />
      </div>
    </div>
  );
}

export default App;
