import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import dinosaurs from "../data/dinosaurs";

function Details() {
  const { id } = useParams(); // name
  const navigate = useNavigate();

  const [info,setInfo] = useState(null);
  const [localImage, setLocalImage] = useState(null);

  useEffect(() => {
    // 🔍 Find if we have local image
    const found = dinosaurs.find(
      (d) => d.name.toLowerCase() === id.toLowerCase()
    );

    if (found) {
      setLocalImage(found.image);
    }

    // 🌐 Fetch Wikipedia data
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${id}`)
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, [id]);

  return (
    <div className="p-6 flex flex-col items-center">

      {/* 🔙 Back */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-green-500 rounded-lg"
      >
        ← Back
      </button>

      {info && (
        <div className="text-center max-w-2xl">

          <h1 className="text-3xl text-green-400 font-bold mb-4">
            {info.title}
          </h1>

          {/* 🖼 IMAGE PRIORITY */}
          <img
            src={
              localImage || info?.thumbnail?.source || ""
            }
            alt={info.title}
            className="rounded-xl mb-4 shadow-lg"
          />

          {/* <p className="text-gray-300 leading-relaxed">
            {info.extract}
          </p> */}

          <p style={{ color: "black", fontSize: "18px" }}>
            {info.extract}
            
            </p>

        </div>
      )}
    </div>
  );
}

export default Details;