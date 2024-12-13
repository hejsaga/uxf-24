const toggleThemeButton = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  toggleThemeButton.textContent = "Light mode";
} else {
  document.body.classList.remove("dark-mode");
  toggleThemeButton.textContent = "Dark mode";
}

toggleThemeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");

  toggleThemeButton.textContent = isDarkMode ? "Light mode" : "Dark mode";

  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});
