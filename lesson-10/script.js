// Deklarera variabler som innehåller värden. Dessa värden används för att dynamiskt uppdatera innehåll på sidan.
const firstName = "Saga"; // En konstant variabel som lagrar ett förnamn.
let occupation = "Software developer"; // En variabel som lagrar en yrkesroll.

// Uppdaterar textinnehållet för ett HTML-element med id "variable-example".
// Här används template literals för att sammanfoga variabler och text till en sträng.
document.getElementById(
  "variable-example"
).textContent = `First name: ${firstName}, Occupation: ${occupation}`;

// Deklarera en array som innehåller en lista av frukter. Denna lista med info skulle kunna komma från en databas.
const fruits = ["Apple", "Banana"];

// Hämta ett <ul>-element från dokumentet där frukterna ska läggas till.
const ul = document.getElementById("array-example");

// Iterera över varje frukt i arrayen.
for (const fruit of fruits) {
  // Skapa ett nytt <li>-element för varje frukt.
  const li = document.createElement("li");

  // Ställ in texten i <li>-elementet till aktuell frukt.
  li.innerText = fruit;

  // Lägg till <li>-elementet som ett barn till <ul>-elementet.
  ul.appendChild(li);
}
