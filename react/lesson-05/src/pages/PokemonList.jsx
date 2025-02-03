import React, { useEffect, useState } from "react";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    // Hämtar Pokémon-data vid första renderingen av komponenten
    // Eftersom dependency-arrayen är tom ([]), körs effekten endast en gång när komponenten monteras
    const fetchData = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");

        if (!response.ok) {
          throw new Error("HTTP-fel! Något gick snett i förfrågan.");
        }

        const data = await response.json();
        const detailedPokemonData = await fetchPokemonDetails(data.results);
        setPokemons(detailedPokemonData);
      } catch (error) {
        setError("Something went wrong");
      } finally {
        // Oavsett om anropet lyckades eller misslyckades, sätt loading till false
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Eftersom dependency-arrayen är tom körs denna effekt endast vid montering av komponenten

  const fetchPokemonDetails = async (pokemons) => {
    return Promise.all(
      pokemons.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const details = await response.json();
        return details;
      })
    );
  };

  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div className="pokemon-container">
      {pokemons.map((pokemon) => (
        <div key={pokemon.name} className="card">
          <img src={pokemon.sprites.front_default} />
          <p>{pokemon.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
