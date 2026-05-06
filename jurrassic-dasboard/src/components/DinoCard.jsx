import { Link } from "react-router-dom"


function DinoCard({ dino }) {
  return (
    <Link to={`/details/${dino.id}`}>
      <div className="bg-gray-900 text-white rounded-xl p-4 shadow-lg hover:scale-105 transition cursor-pointer">
        <img
          src={dino.image}
          alt={dino.name}
          className="w-full h-48 object-contain bg-black rounded-lg"
        />
        <h2 className="text-xl font-bold mt-2">{dino.name}</h2>
        <p className="text-green-400">{dino.type}</p>
        <p className="text-sm text-gray-400">{dino.era}</p>
      </div>
    </Link>
  );
}

export default DinoCard;