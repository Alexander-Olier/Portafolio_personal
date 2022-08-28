import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Portafolio from "./components/Portafolio";

function App() {
  return (
    <div className="container m-auto lg:container mx-autp">
      <Header />
      <Home />
      <About />
      <Portafolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
