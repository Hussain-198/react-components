import ModalPage from "./pages/ModalPage";
import ButtonPage from "./pages/ButtonPage";
import InputPage from "./pages/InputPage";
import CardPage from "./pages/CardPage";
import AllComponentsPage from "./pages/AllComponentsPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/button" element={<ButtonPage />} />
            <Route path="/input" element={<InputPage />} />
            <Route path="/card" element={<CardPage />} />
            <Route path="/modal" element={<ModalPage />} />
            <Route path="/all" element={<AllComponentsPage />} />           
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
