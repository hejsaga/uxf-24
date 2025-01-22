import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Home";
import { PageLayout } from "./components/PageLayout";

const App = () => {
  const links = [
    { name: "home", href: "/home" },
    { name: "about", href: "/about" },
    { name: "contact", href: "/contact" },
  ];

  return (
    <PageLayout>
      <Navbar links={links} />
      <h1>Min snygga hemsida</h1>

      <Home />
      <Footer />
    </PageLayout>
  );
};

export default App;
