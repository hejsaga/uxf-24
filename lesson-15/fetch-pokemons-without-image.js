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

    // Rendera datan på sidan. Detta är ett sätt att göra det på, precis som att du kan använda dig av createElement eller andra metoder för att göra samma sak.
    const pokemonHTML = data.results
      .map((pokemon) => {
        return `<div class="card">
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

fetchData();
