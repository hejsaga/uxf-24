import Navbar from "./Navbar";
import Home from "./Home";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="page">
        <Home />
      </div>
    </>
  );
};

export default App;
