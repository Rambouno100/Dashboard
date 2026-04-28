import { useParams, useNavigate } from "react-router-dom";
import { usePokemon } from "../hooks/use-pokemon";

const STAT_LABELS = {
  hp: "HP", attack: "ATK", defense: "DEF",
  "special-attack": "SP.ATK", "special-defense": "SP.DEF", speed: "SPE",
};

const STAT_COLORS = {
  hp: "bg-emerald-400", attack: "bg-red-400", defense: "bg-blue-400",
  "special-attack": "bg-purple-400", "special-defense": "bg-orange-400", speed: "bg-yellow-400",
};

const TYPE_COLORS = {
  fire: "bg-orange-500", water: "bg-blue-500", grass: "bg-green-500",
  electric: "bg-yellow-400", psychic: "bg-pink-500", ice: "bg-cyan-400",
  dragon: "bg-indigo-600", dark: "bg-gray-700", fairy: "bg-pink-300",
  normal: "bg-gray-400", fighting: "bg-red-700", poison: "bg-purple-500",
  ground: "bg-amber-600", flying: "bg-sky-400", bug: "bg-lime-500",
  rock: "bg-stone-500", ghost: "bg-violet-700", steel: "bg-slate-400",
};

export const PokemonDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { pokemon, loading } = usePokemon(id);

  if (loading) return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <p className="text-green-400 animate-pulse font-mono tracking-widest">Cargando...</p>
    </div>
  );
  if (!pokemon) return null;

  const sprite = pokemon.sprites?.other?.["official-artwork"]?.front_default
    || pokemon.sprites?.front_default;

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6 gap-4">

      <p className="text-xs text-gray-500 tracking-widest uppercase font-mono">
        #{String(pokemon.id).padStart(3, "0")}
      </p>

      <div className="bg-[#C82E30] rounded-2xl p-5 w-80 border-4 border-red-900 space-y-4">

        <div className="bg-white rounded-xl flex items-center justify-center p-3 border-2 border-red-900">
          <img
            src={sprite}
            alt={pokemon.name}
            className="w-40 h-40 object-contain drop-shadow"
            style={{ imageRendering: "pixelated" }}
          />
        </div>

        <h1 className="text-white text-2xl font-bold capitalize text-center tracking-wide drop-shadow">
          {pokemon.name}
        </h1>

        <div className="flex gap-2 flex-wrap justify-center">
          {pokemon.types.map(t => (
            <span key={t.type.name} className={`text-xs font-bold px-3 py-1 rounded-full text-white uppercase tracking-widest ${TYPE_COLORS[t.type.name] || "bg-gray-500"}`}>
              {t.type.name}
            </span>
          ))}
        </div>

        <div className="bg-black rounded-lg p-3 font-mono text-green-400 text-xs grid grid-cols-2 gap-1">
          <p>Altura: {(pokemon.height / 10).toFixed(1)} m</p>
          <p>Peso: {(pokemon.weight / 10).toFixed(1)} kg</p>
        </div>

        <div className="bg-black rounded-lg p-3 space-y-2">
          {pokemon.stats.map(s => (
            <div key={s.stat.name} className="flex items-center gap-2">
              <span className="text-green-400 font-mono text-xs w-14 shrink-0">
                {STAT_LABELS[s.stat.name] || s.stat.name.slice(0, 3).toUpperCase()}
              </span>
              <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${STAT_COLORS[s.stat.name] || "bg-gray-400"}`}
                  style={{ width: `${Math.round(s.base_stat / 255 * 100)}%` }}
                />
              </div>
              <span className="text-green-400 font-mono text-xs w-6 text-right">{s.base_stat}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate("/pokemon")}
          className="w-full bg-black text-green-400 font-mono font-bold py-2 rounded-lg text-sm hover:bg-gray-900 active:scale-95 transition tracking-widest"
        >
          ◄ VOLVER
        </button>

      </div>
    </div>
  );
};