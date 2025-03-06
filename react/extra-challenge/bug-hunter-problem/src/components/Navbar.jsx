import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`navbar ${theme}`}>
      <h1>Nav</h1>
      <button onClick={toggleTheme}>Switch theme</button>
    </nav>
  );
};

export default Navbar;
