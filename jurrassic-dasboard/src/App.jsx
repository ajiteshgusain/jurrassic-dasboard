import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(true);

  return (
    <Router>
      <div className={dark ? "dark" : ""}>
        <div className="min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white transition">

          {/* 🌙 Toggle */}
          {/* <button
            onClick={() => setDark(!dark)}
            className="fixed top-4 right-4 px-4 py-2 bg-green-500 rounded-lg text-white"
          >
            {dark ? "🌙 Dark" : "☀ Light"}
          </button> */}

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