import dinosaurs from "../data/dinosaurs";
import DinoCard from "../components/DinoCard";

function Home() {
  return (
    <div>
      <h1 className="text-4xl text-green-400 font-bold text-center mb-8">
        🦖 Jurassic Park Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dinosaurs.map((dino) => (
          <DinoCard key={dino.id} dino={dino} />
        ))}
      </div>
    </div>
  );
}

export default Home;