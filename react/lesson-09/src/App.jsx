import Home from "./pages/Home";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <div className="app">
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </div>
  );
};

export default App;
