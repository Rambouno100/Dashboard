      
import { useNavigate } from "react-router-dom";

export const PokemonCard = ({ pokemon, id }) => {
  const navigate = useNavigate();

  return (
    <div className="rounded-2xl p-6 w-80 border-4 border-red-900 bg-[#C82E30]">

      <div className="flex items-center gap-2 mb-5">
      <div className="w-3 h-3 rounded-full bg-blue-400" />
      <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
      </div>


      <div className="bg-black rounded-lg p-4 mb-4 text-center border-4 border-gray-700">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} className="mx-auto w-36 h-36" />
        <p className="text-green-400 font-bold capitalize text-xl">{pokemon.name}</p>
        <p className="text-gray-500 text-sm">#{pokemon.id}</p>
      </div>

      <button
        onClick={() => navigate(`/pokemon/${pokemon.id}`)}
        className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-3 rounded text-sm transition"
      >
        ▲ Ver detalle
      </button>

    </div>
  );
};