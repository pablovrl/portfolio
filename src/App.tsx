import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="px-4 pt-20">
        <Home />
      </div>
    </div>
  );
}

export default App;
