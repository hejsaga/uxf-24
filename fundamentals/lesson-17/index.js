const baseUrl = "https://cdn.contentful.com/spaces/";

const SPACE_ID = localStorage.getItem("space_id");
const ACCESS_TOKEN = localStorage.getItem("access_token");
const apiURL = `${baseUrl}${SPACE_ID}/entries?access_token=${ACCESS_TOKEN}&content_type=post`;

const fetchData = async () => {
  try {
    const response = await fetch(apiURL);

    if (!response.ok) {
      throw new Error("HTTP-fel! Något gick snett i förfrågan.");
    }

    const data = await response.json();

    // Skapa en array med ett objekt som innehåller hela inlägget + namnet på författaren
    const postsWithAuthor = data.items.map((post) => {
      // Välj ut ID:t på inläggets författare
      const authorId = post.fields.author.sys.id;
      // Leta efter samma ID i arrayen från API-svaret som innehåller relationell data (includes.Entry)
      // Om en match finns, kommer author att sparas i variabeln
      const author = data.includes.Entry.find(
        (entry) => entry.sys.id === authorId
      );

      // Returnera ett nytt objekt (dvs spara objektet i postsWithAuthor-variabeln) som innehåller namnet på den matchande författaren
      return {
        title: post.fields.title,
        text: post.fields.text,
        author: author.fields.name,
      };
    });

    const postContainer = document.getElementById("posts-container");
    // Mappa över din egen array som även innehåller author för att kunna visa dess namn
    const postHTML = postsWithAuthor.map((post) => {
      return `<div class="post">
                    <h2>${post.title}</h2>
                    <p>${post.author}</p>
                    <p>${post.text}</p>
                    </div>`;
    });

    postContainer.innerHTML = postHTML;
  } catch (error) {
    console.error("Ett fel inträffade vid hämtning av data:", error);
  }
};

fetchData();
