import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { useState } from "reac";

function App() {
  const [dark, setDark] = useState(true);

  return (
    <Router>
      <div className={dark ? dark" : ""}>
        <div className="min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white transition">

        

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App; 