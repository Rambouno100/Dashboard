import { useState, useEffect } from "react";
import { getPokemon } from "../services/pokemon";

export const usePokemon = (id) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getPokemon(id)
      .then(setPokemon)
      .finally(() => setLoading(false));
  }, [id]);

  return { pokemon, loading };
};