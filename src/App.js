import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NosFonds from "./pages/NosFonds";
import ResponsabilitéSocial from "./pages/ResponsabilitéSocial";
import Esprit from "./pages/Esprit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="nosfonds" element={<NosFonds />} />

      <Route path="esprit" element={<Esprit />} />
      <Route path="respSocial" element={<ResponsabilitéSocial />} />
    </Routes>
  );
}

export default App;
