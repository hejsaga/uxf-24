import useLocalStorage from "../hooks/useLocalStorage";

const Navbar = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h1>Nav</h1>
      <button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Switch theme
      </button>
    </nav>
  );
};

export default Navbar;
