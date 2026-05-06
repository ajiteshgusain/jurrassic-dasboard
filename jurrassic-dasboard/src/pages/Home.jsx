// import dinosaurs from "../data/dinosaurs";
// import DinoCard from "../components/DinoCard";

// function Home() {
//   return (
//     <div className="p-6">
//       <h1 className="text-4xl text-green-400 font-bold text-center mb-10">
//         🦖 Jurassic Park Dashboard
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {dinosaurs.map((dino) => (
//           <DinoCard key={dino.id} dino={dino} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;


import { useState } from "react";
import dinosaurs from "../data/dinosaurs";
import DinoCard from "../components/DinoCard";

function Home() {
  const [search, setSearch] = useState("");

  const filtered = dinosaurs.filter((dino) =>
    dino.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">

      <h1 className="text-4xl text-green-400 font-bold text-center mb-6">
        🦖 Dinosaur Explorer
      </h1>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search dinosaur..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 mb-6 rounded-lg bg-gray-800 text-white"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((dino) => (
          <DinoCard key={dino.id} dino={dino} />
        ))}
      </div>

    </div>
  );
}

export default Home;