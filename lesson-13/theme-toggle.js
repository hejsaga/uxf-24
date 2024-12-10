// Denna kod är kopierad från lektion 12, hänvisar dit för förtydligande kommentarer
const toggleThemeButton = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  toggleThemeButton.textContent = "Byt till Light Mode";
} else {
  document.body.classList.remove("dark-mode");
  toggleThemeButton.textContent = "Byt till Dark Mode";
}

toggleThemeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");

  toggleThemeButton.textContent = isDarkMode
    ? "Byt till Light Mode"
    : "Byt till Dark Mode";

  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});
