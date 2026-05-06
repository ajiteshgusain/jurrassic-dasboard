import { Link } from "react-router-dom";

function DinoCard({ dino }) {
  return (
    <Link to={`/details/${dino.id}`}>
      <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer">

        <img
          src={dino.image}
          alt={dino.name}
          className="w-full h-52 object-contain bg-black"
        />

        <div className="p-4">
          <h2 className="text-xl font-bold">{dino.name}</h2>
          <p className="text-green-400">{dino.type}</p>
          <p className="text-gray-400 text-sm">{dino.era}</p>
        </div>

      </div>
    </Link>
  );
}

export default DinoCard;