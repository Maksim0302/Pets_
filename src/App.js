import { useState } from "react";
import Header, { ResponsiveMenu } from "./components/Header/Header";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import Banner from "./components/Banner/Banner";
import PetList from "./components/PetList/PetList";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <ResponsiveMenu 
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <Header 
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <Home/>
      <Category/>
      <Banner/>
      <PetList/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
