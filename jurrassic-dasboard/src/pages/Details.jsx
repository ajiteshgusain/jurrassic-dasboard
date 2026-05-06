// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// function Details() {
//   const { id } = useParams();
//   const [data, setData] = useState(null);

//   const dinoNames = {
//     1: "Tyrannosaurus rex",
//     2: "Triceratops",
//     3: "Velociraptor"
//   };

//   useEffect(() => {
//     const name = dinoNames[id];

//     fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${name}`)
//       .then(res => res.json())
//       .then(data => setData(data))
//       .catch(err => console.log(err));
//   }, [id]);

//   return (
//     <div className="text-white p-6">
//       {!data ? (
//         <h2>Loading...</h2>
//       ) : (
//         <div className="max-w-2xl mx-auto text-center">
//           <h1 className="text-3xl font-bold text-green-400 mb-4">
//             {data.title}
//           </h1>

//           {data.thumbnail && (
//             <img
//               src={data.thumbnail.source}
//               alt={data.title}
//               className="mx-auto rounded-lg mb-4"
//             />
//           )}

//           <p className="text-gray-300">{data.extract}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Details;


// return (
//   <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-800 text-white p-6">
//     {!data ? (
//       <h2 className="text-center text-xl animate-pulse">Loading...</h2>
//     ) : (
//       <div className="max-w-4xl mx-auto text-center">

//         {/* Title */}
//         <h1 className="text-4xl font-extrabold text-green-400 mb-6">
//           {data.title}
//         </h1>

//         {/* Image */}
//         {data.thumbnail && (
//           <img
//             src={data.thumbnail.source}
//             alt={data.title}
//             className="mx-auto rounded-2xl shadow-2xl mb-6 w-100 hover:scale-105 transition duration-300"
//           />
//         )}

//         {/* Description */}
//         <p className="text-gray-300 text-lg leading-relaxed bg-gray-900 p-6 rounded-xl shadow-md">
//           {data.extract}
//         </p>

//       </div>
//     )}
//   </div>
// );

// }

// export default  Details;

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const dinoNames = {
    1: "Tyrannosaurus",
    2: "Triceratops",
    3: "Velociraptor",
  };

  useEffect(() => {
    setLoading(true);
    setError(false);

    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${dinoNames[id]}`)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-900 to-black text-white">

      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="self-start mb-6 px-5 py-2 bg-gradient-to-r from-green-400 to-emerald-600 hover:scale-105 transition rounded-lg shadow-lg"
      >
        ← Back
      </button>

      {/* 🔄 Loading */}
      {loading && (
        <h2 className="text-xl animate-pulse text-gray-400">
          Loading dinosaur data...
        </h2>
      )}

      {/* ❌ Error */}
      {error && (
        <h2 className="text-red-500">Failed to load data</h2>
      )}

      {/* ✅ Content */}
      {!loading && !error && info && (
        <div className="max-w-3xl text-center bg-gray-900 p-6 rounded-2xl shadow-xl">

          <h1 className="text-4xl font-bold text-green-400 mb-6">
            {info.title}
          </h1>

          {info.thumbnail && (
            <img
              src={info.thumbnail.source}
              alt={info.title}
              className="mx-auto rounded-xl mb-6 w-80"
            />
          )}

          <p className="text-gray-300 leading-relaxed text-lg">
            {info.extract}
          </p>

        </div>
      )}
    </div>
  );
}

export default Details;