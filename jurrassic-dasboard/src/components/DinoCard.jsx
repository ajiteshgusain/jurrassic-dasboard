// // import { Link } from "react-router-dom";

// // function DinoCard({ dino }) {
// //   return (
// //     <Link to={`/details/${dino.id}`}>
// //       <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer">

// //         <img
// //           src={dino.image}
// //           alt={dino.name}
// //           className="w-full h-52 object-contain bg-black"
// //         />

// //         <div className="p-4">
// //           <h2 className="text-xl font-bold">{dino.name}</h2>
// //           <p className="text-green-400">{dino.type}</p>
// //           <p className="text-gray-400 text-sm">{dino.era}</p>
// //         </div>

// //       </div>
// //     </Link>
// //   );
// // }

// // export default DinoCard;


// import { Link } from "react-router-dom";
// //import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

// function DinoCard({ dino }) {
//   const [fav, setFav] = useState(false);

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("favorites")) || [];
//     setFav(saved.includes(dino.name));
//   }, [dino.name]);

//   const toggleFav = (e) => {
//     e.preventDefault();

//     let saved = JSON.parse(localStorage.getItem("favorites")) || [];

//     if (saved.includes(dino.name)) {
//       saved = saved.filter((item) => item !== dino.name);
//     } else {
//       saved.push(dino.name);
//     }

//     localStorage.setItem("favorites", JSON.stringify(saved));
//     setFav(!fav);
//   };

//   return (
//     <Link to={`/details/${dino.id}`}>
//       <motion.div
//         whileHover={{ scale: 1.05 }}
//         className="bg-gray-900 dark:bg-gray-800 rounded-xl p-4 shadow-lg cursor-pointer"
//       >
//         <h2 className="text-xl font-bold">{dino.name}</h2>

//         {/* ❤️ Favorite */}
//         <button onClick={toggleFav} className="text-red-500 text-xl">
//           {fav ? "❤️" : "🤍"}
//         </button>
//       </motion.div>
//     </Link>
//   );
// }

// export default DinoCard;


import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function DinoCard({ dino }) {
  const [fav, setFav] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFav(saved.includes(dino.name));
  }, [dino.name]);

  const toggleFav = (e) => {
    e.preventDefault();

    let saved = JSON.parse(localStorage.getItem("favorites")) || [];

    if (saved.includes(dino.name)) {
      saved = saved.filter((item) => item !== dino.name);
    } else {
      saved.push(dino.name);
    }

    localStorage.setItem("favorites", JSON.stringify(saved));
    setFav(!fav);
  };

  return (
    <Link to={`/details/${dino.id}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-gray-900 dark:bg-gray-800 rounded-xl p-4 shadow-lg cursor-pointer relative"
      >
        <h2 className="text-xl font-bold">{dino.name}</h2>

        {/* ❤️ Favorite */}
        <button
          onClick={toggleFav}
          className="absolute top-2 right-2 text-red-500 text-xl"
        >
          {fav ? "❤️" : "🤍"}
        </button>
      </motion.div>
    </Link>
  );
}

export default DinoCard;

