// Bas-URL för att använda Contentful API. Detta är konstant och används som utgångspunkt för API-anrop.
const baseUrl = "https://cdn.contentful.com/spaces/";

/* Hämtar Space ID och Access Token från Local Storage.
   Detta används som en workaround eftersom .env-variabler inte är tillgängliga i detta projekt.
   Notera att lagring av känsliga data som access tokens i Local Storage inte är säkert för produktionskod, detta kommer endast fungera att köra lokalt.
*/
const SPACE_ID = localStorage.getItem("space_id");
const ACCESS_TOKEN = localStorage.getItem("access_token");

// Skapar API-URL med Space ID, Access Token och content_type som parameter.
// Detta dynamiska URL bygger på användarens lagrade credentials.
const apiURL = `${baseUrl}${SPACE_ID}/entries?access_token=${ACCESS_TOKEN}&content_type=post`;

// Asynkron funktion för att hämta data från API:et.
const fetchData = async () => {
  try {
    // Skickar en GET-förfrågan till API:et.
    const response = await fetch(apiURL);

    // Kontrollerar om förfrågan lyckades. Om inte, kastar ett fel.
    if (!response.ok) {
      throw new Error("HTTP-fel! Något gick snett i förfrågan.");
    }

    // Om förfrågan lyckas, konverteras svaret till JSON.
    const data = await response.json();

    // Hittar elementet med id "posts-container" i DOM.
    const postContainer = document.getElementById("posts-container");

    // Mapper över posterna i API-svaret och skapar HTML för varje post.
    const postHTML = data.items.map((post) => {
      // Returnerar en HTML-struktur för varje post med titel och textfält.
      return `<div class="post">
                    <h2>${post.fields.title}</h2>
                    <p>${post.fields.text}</p>
                    </div>`;
    });

    // Renderar alla poster till "posts-container" genom att sätta innerHTML.
    postContainer.innerHTML = postHTML;
  } catch (error) {
    // Fångar eventuella fel och loggar dem.
    // Här kan förbättringar göras, t.ex. att visa ett användarvänligt felmeddelande.
    console.error("Ett fel inträffade vid hämtning av data:", error);
  }
};

// Anropar fetchData för att hämta och rendera poster vid sidladdning.
fetchData();
