import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Project from "./pages/Project";
import Navigator from "./components/Navigator";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
        <Route path="/" element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Navigator" element={<Navigator />} />
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
