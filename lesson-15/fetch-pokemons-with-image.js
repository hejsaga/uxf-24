const dataContainer = document.getElementById("data-container");

const fetchData = async () => {
  try {
    // Hämta data från Pokémon API
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");

    // Kontrollera om förfrågan lyckades
    if (!response.ok) {
      throw new Error("HTTP-fel! Något gick snett i förfrågan.");
    }

    // Konvertera svaret till JSON
    const data = await response.json();

    // Hämtar ut detaljerad data om Pokemons så att vi kan visa bilder
    const detailedPokemonData = await fetchPokemonDetails(data.results);

    // Rendera datan på sidan. Detta är ett sätt att göra det på, precis som att du kan använda dig av createElement eller andra metoder för att göra samma sak.
    const pokemonHTML = detailedPokemonData
      .map((pokemon) => {
        return `<div class="card">
            <img src=${pokemon.sprites.front_default}>
            <h2>${pokemon.name}</h2>
        </div>`;
      })
      .join("");

    // Lägg till HTML-strängen i dataContainer
    dataContainer.innerHTML = pokemonHTML;
  } catch (error) {
    // Visa felet i frontend
    dataContainer.innerHTML = `<p>Någonting gick fel i hämtningen av Pokémons.</p>`;
  }
};

const fetchPokemonDetails = async (pokemons) => {
  return Promise.all(
    pokemons.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      const details = await response.json();
      return details;
    })
  );
};

fetchData();
