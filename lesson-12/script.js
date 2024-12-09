// --------------------------- HANTERING AV TEMA --------------------------- //

const toggleThemeButton = document.querySelector(".theme-toggle");

// Kolla om det finns ett tema sparat i localStorage när sidan laddas
const savedTheme = localStorage.getItem("theme");

// Ladda in temat som finns sparat localStorage när sidan laddas (utan knapptryck)
if (savedTheme === "dark") {
  // Lägg till klassen "dark-mode" om det sparade temat i localStorage är "dark"
  document.body.classList.add("dark-mode");
  toggleThemeButton.textContent = "Byt till Light Mode";
} else {
  // Ta bort klassen "dark-mode" om det sparade temat i localStorage inte är "dark"
  document.body.classList.remove("dark-mode");
  toggleThemeButton.textContent = "Byt till Dark Mode";
}

// Lyssna på klick på vår toggle-theme-knapp
toggleThemeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Se om vår body har klassen "dark-mode"
  const isDarkMode = document.body.classList.contains("dark-mode");

  // Om vår body har klassen "dark-mode", ändra texten på knappen. Stylingen hanteras i CSS
  // Syntaxen nedan kallas för ternary operator
  toggleThemeButton.textContent = isDarkMode
    ? "Byt till Light Mode"
    : "Byt till Dark Mode";

  // Spara det aktuella temat i localStorage
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});

// --------------------------- HANTERING AV TODOS --------------------------- //

const addTodoButton = document.querySelector(".add-todo-btn");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

// Ladda och visa todos från localStorage
const savedTodos = JSON.parse(localStorage.getItem("todos"));

// För varje todo, skapa en <li> som vi lägger till i DOM
for (let i = 0; i < savedTodos.length; i++) {
  const todoItem = document.createElement("li");
  // Sätt textContent på vår <li> till texted som den item vi itererar över just nu har
  todoItem.textContent = savedTodos[i];
  todoList.appendChild(todoItem);
}

// Lyssna på klick på vår add-todo-knapp
addTodoButton.addEventListener("click", () => {
  // Använd trim() för att ta bort white-spaces före och efter strängen i inputfältet
  const todoText = todoInput.value.trim();

  // Gör en early return om input.value är en tom sträng
  if (todoText === "") {
    return;
  }

  // Skapa <li>-elementet och lägg till i DOM
  const todoItem = document.createElement("li");
  todoItem.textContent = todoText;
  todoList.appendChild(todoItem);

  // Spara den nya listan av todos i localStorage
  const todos = [];
  // För varje klick på lägg till-knappen, lägg till en item i vår array som innehåller texten
  for (let i = 0; i < todoList.children.length; i++) {
    todos.push(todoList.children[i].textContent);
  }

  // Spara den skapta arrayen i localStorage så att vi kan läsa in den på omladdning
  localStorage.setItem("todos", JSON.stringify(todos));

  // Töm inputfältet när en todo är tillagd för bättre användarupplevelse
  todoInput.value = "";
});
