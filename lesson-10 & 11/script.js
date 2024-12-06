// ---------- VARIABLES ---------- //

// Deklarera variabler som innehåller värden. Dessa värden används för att dynamiskt uppdatera innehåll på sidan.
const firstName = "Saga"; // En konstant variabel som lagrar ett förnamn som inte kan ändras.
let occupation = "Software developer"; // En variabel som lagrar en yrkesroll som kan ändras.
const student = {
  name: "Saga",
  age: 30,
  isEnrolled: true,
};

// Uppdaterar textinnehållet för ett HTML-element med id "variable-example".
// Här används template literals för att sammanfoga variabler och text till en sträng.
document.getElementById(
  "variable-example"
).textContent = `First name: ${firstName}, Occupation: ${occupation}`;

// ---------- ARRAYS AND LOOPS ---------- //

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

// ---------- OBJECTS ---------- //

const studentFromDatabase = student;

// Sätt textinnehållet till objektet. Vi kan inte sätta hela student här, eftersom att webbläsaren inte kan läsa ut det - webbläsaren kan endast läsa värdet i nyckel-värde paret
document.getElementById(
  "object-example"
).textContent = `Name: ${studentFromDatabase.name}, Age: ${studentFromDatabase.age}, isEnrolled: ${studentFromDatabase.isEnrolled}`;

// ---------- IF STATEMENTS ---------- //
let age = 18;
if (age > 20) {
  document.getElementById("if-example").textContent = "You are an adult";
} else {
  document.getElementById("if-example").textContent = "You are a baby";
}

// ---------- USE DYNAMIC INPUT ---------- //
const form = document.getElementById("userForm");
const inputFieldName = document.getElementById("userInputName");
const inputFieldAge = document.getElementById("userInputAge");
const output = document.getElementById("output");

form.addEventListener("submit", (event) => {
  /* event.preventDefault(); används för att förhindra standardbeteendet för ett specifikt event i webbläsaren.
  Ett default-beteende för ett submit-event leder vanligtvis till en omladdning av sidan. */
  event.preventDefault();

  output.textContent = `Name: ${inputFieldName.value}, Age: ${inputFieldAge.value}`;
});
