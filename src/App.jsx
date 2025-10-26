import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import ClaudeRecipe from "./pages/ClaudeRecipe";
import MyPicks from "./pages/MyPicks";
import { FavoritesProvider } from "./contexts/FavoritesContext";

function App() {
  return (
    <>
      <FavoritesProvider>
        <BrowserRouter>
          <div className="flex flex-col h-full pt-20">
            <Navbar />
            <div className="flex flex-col grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/claude-recipe" element={<ClaudeRecipe />} />
                <Route path="/my-picks" element={<MyPicks />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
            <div className="justify-self-end">
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </FavoritesProvider>
    </>
  );
}

export default App;
