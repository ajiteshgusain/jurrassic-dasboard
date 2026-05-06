// import { Link } from "react-router-dom";
// import {BrowserRouter, Routes,Route}  from "react-router-dom";
// import Home from "./pages/Home";
// import Favourite from "./pages/Favourite";
// import Details from "./pages/Details";

// function App(){
//   return(

//     <BrowserRouter>
//     <div className="bg-black min-h-screen text-white">

//         {/* 🔥 NAVBAR */}
//         <div className="flex justify-center gap-6 p-4 border-b border-gray-700">
//           <Link to="/" className="text-green-400 hover:underline">
//             Home
//           </Link>
//           <Link to="/favorites" className="text-green-400 hover:underline">
//             Favorites
//           </Link>
//         </div>

//         {/* 🔥 PAGES */}
//         <div className="p-6">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/favorites" element={<Favourite />} />
//             <Route path="/details/:id" element={<Details />} />
//           </Routes>
//         </div>

//       </div>
//     </BrowserRouter>
//   );

// }

// export default App;





import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;