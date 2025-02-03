import React from "react";
import useSWR from "swr";
import PokemonCard from "../components/PokemonCard";

const fetcher = (url) => fetch(url).then((res) => res.json());

const PokemonListSwr = () => {
  const { data, error, isLoading } = useSWR(
    "https://pokeapi.co/api/v2/pokemon",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="pokemon-container">
      {data.results.map((pokemon) => (
        <PokemonCard key={pokemon.name} url={pokemon.url} />
      ))}
    </div>
  );
};

export default PokemonListSwr;
