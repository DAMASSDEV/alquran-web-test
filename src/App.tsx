import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import DetailSurahPage from "./pages/DetailSurahPage";
import Splash from "./pages/Splash";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/surah/:surahId" element={<DetailSurahPage />} />
      </Routes>
    </div>
  );
}

export default App;
