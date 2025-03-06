import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<PostDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="**" element={<NotFound />} />
    </Routes>
  </div>
);

export default App;
