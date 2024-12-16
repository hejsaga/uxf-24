// Detta är ett grundskelett för datahämtningar, och kan användas som mall för att bygga upp era förfrågningar

const fetchData = async () => {
  try {
    // Hämta data med hjälp av fetch. Lägg in URL i sträng nedan
    const response = await fetch("");

    // Kontrollera om förfrågan lyckades
    if (!response.ok) {
      throw new Error("HTTP-fel! Något gick snett i förfrågan.");
    }

    // Konvertera svaret till JSON
    const data = await response.json();
  } catch (error) {
    // Hantera felet, ex. visa i frontend
  }
};

fetchData();
