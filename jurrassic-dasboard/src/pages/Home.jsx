// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Home() {
//   const [search, setSearch] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = (e) => {
//     if (e.key === "Enter" && search.trim() !== "") {
//       navigate(`/details/${search}`);
//     }
//   };

//   return (
//     <div className="p-6">

//       <h1 className="text-4xl text-green-500 font-bold text-center mb-6">
//         🦖 Dinosaur Explorer
//       </h1>

//       {/* 🔍 Search */}
//       <input
//         type="text"
//         placeholder="Search any dinosaur..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         onKeyDown={handleSearch}
//         className="w-full p-3 mb-6 rounded-lg bg-gray-800 text-white"
//       />

//     </div>
//   );
// }

// export default Home;


import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dinosaurs from "../data/dinosaurs";

function Home() {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // 🔍 Fetch suggestions from Wikipedia
  useEffect(() => {
    if (search.length < 2) {
      setSuggestions([]);
      return;
    }

    fetch(
      `https://en.wikipedia.org/w/api.php?action=opensearch&search=${search}&limit=5&namespace=0&format=json&origin=*`
    )
      .then((res) => res.json())
      .then((data) => {
        setSuggestions(data[1]); // names array
      });
  }, [search]);

  return (
    <div className="p-6">

      {/* 🦖 Title */}
      <h1 className="text-4xl text-green-400 font-bold text-center mb-6">
        🦖 Dino Explorer
      </h1>

      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search dinosaurs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded-lg bg-gray-800 text-white mb-2 outline-none"
      />

      {/* 📌 Suggestions with Images */}
      <div className="bg-gray-900 rounded-lg overflow-hidden">

        {suggestions.map((item, index) => {
          // 🔍 check if local image exists
          const local = dinosaurs.find(
            (d) => d.name.toLowerCase() === item.toLowerCase()
          );

          return (
            <Link
              key={index}
              to={`/details/${item}`}
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-700 border-b border-gray-800"
            >
              {/* 🖼 Image */}
              <img
                src={local?.image || "https://via.placeholder.com/40"}
                alt={item}
                className="w-10 h-10 rounded object-cover"
              />

              {/* 📝 Name */}
              <span>{item}</span>
            </Link>
          );
        })}

      </div>

    </div>
  );
}

export default Home;