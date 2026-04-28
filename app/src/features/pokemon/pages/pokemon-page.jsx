import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePokemon } from "../hooks/use-pokemon";

const TYPE_COLORS = {
  fire: "bg-orange-500", water: "bg-blue-500", grass: "bg-green-500",
  electric: "bg-yellow-400", psychic: "bg-pink-500", ice: "bg-cyan-400",
  dragon: "bg-indigo-600", dark: "bg-gray-700", fairy: "bg-pink-300",
  normal: "bg-gray-400", fighting: "bg-red-700", poison: "bg-purple-500",
  ground: "bg-amber-600", flying: "bg-sky-400", bug: "bg-lime-500",
  rock: "bg-stone-500", ghost: "bg-violet-700", steel: "bg-slate-400",
};

export const PokemonPage = () => {
  const [id, setId] = useState(1);
  const { pokemon, loading } = usePokemon(id);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setVisible(false);
    if (!loading && pokemon) setTimeout(() => setVisible(true), 20);
  }, [pokemon, loading]);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center gap-6 p-8">

      <p className="text-xs text-gray-500 tracking-widest uppercase">
        #{String(id).padStart(3, "0")}
      </p>

      <div className="flex items-center justify-center" style={{ minHeight: 340 }}>
        {loading ? (
          <p className="text-green-400 animate-pulse text-sm tracking-widest">Cargando...</p>
        ) : pokemon ? (
          <div
            onClick={() => navigate(`/pokemon/${pokemon.id}`)}
            className={`cursor-pointer bg-[#C82E30] border-4 border-red-900 rounded-2xl p-6 w-72 flex flex-col items-center gap-3 transition-all duration-300 hover:scale-105 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
          >
            <div className="bg-white rounded-full w-40 h-40 flex items-center justify-center border-4 border-red-900">
              <img
                src={pokemon.sprites?.other?.["official-artwork"]?.front_default || pokemon.sprites?.front_default}
                alt={pokemon.name}
                className="w-32 h-32 object-contain"
                style={{ imageRendering: "pixelated" }}
              />
            </div>

            <p className="text-white text-xl font-bold capitalize tracking-wide drop-shadow">
              {pokemon.name}
            </p>

            <div className="flex gap-2 flex-wrap justify-center">
              {pokemon.types.map(t => (
                <span key={t.type.name} className={`text-xs font-bold px-3 py-1 rounded-full text-white uppercase tracking-widest ${TYPE_COLORS[t.type.name] || "bg-gray-500"}`}>
                  {t.type.name}
                </span>
              ))}
            </div>

            <div className="bg-black rounded-lg px-4 py-2 text-green-400 text-xs font-mono w-full text-center">
              HP {pokemon.stats[0]?.base_stat} &nbsp;|&nbsp; ATK {pokemon.stats[1]?.base_stat} &nbsp;|&nbsp; DEF {pokemon.stats[2]?.base_stat}
            </div>
          </div>
        ) : null}
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setId(i => Math.max(1, i - 1))}
          disabled={id <= 1}
          className="w-11 h-11 rounded-full bg-[#C82E30] border-2 border-red-900 text-white text-lg font-bold hover:bg-red-700 active:scale-95 transition disabled:opacity-30 disabled:cursor-not-allowed"
        >◄</button>

        <input
          type="number" min="1" max="1025" value={id}
          onChange={e => { const v = parseInt(e.target.value); if (v >= 1 && v <= 1025) setId(v); }}
          className="w-16 h-11 rounded-lg bg-black border-2 border-red-900 text-green-400 font-mono text-sm text-center outline-none focus:border-red-600 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />

        <button
          onClick={() => setId(i => Math.min(1025, i + 1))}
          className="w-11 h-11 rounded-full bg-[#C82E30] border-2 border-red-900 text-white text-lg font-bold hover:bg-red-700 active:scale-95 transition"
        >►</button>
      </div>

    </div>
  );
};