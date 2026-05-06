import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Details() {
  const { id } = useParams();
  const [info, setInfo] = useState("");

  const dinoNames = {
    1: "Tyrannosaurus rex",
    2: "Triceratops",
    3: "Velociraptor",
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=63973b7e3464126701b1539ee2ffcda4&query=Jurassic Park`)
      .then((res) => res.json())
      .then((data) => setInfo(data.extract));
  }, [id]);

  return (
      <div className="text-white p-6">

    {movie && (
      <div className="mt-6 text-left">
        <h2 className="text-2xl font-bold text-green-400">
          {movie.title}
        </h2>

        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="mt-4 rounded-lg"
        />

        <p className="mt-4">{movie.overview}</p>

        <p className="mt-2 text-yellow-400">
          ⭐ Rating: {movie.vote_average}
        </p>
      </div>
    )}

  </div>
);
}

export default Details;