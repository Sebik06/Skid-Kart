
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Navbar from './components/Navbar'
import Uvod from "./pages/Uvod";
import Onas from "./pages/Onas";
import Preteky from "./pages/Preteky";
import Kontakt from "./pages/Kontakt";






function App() {
  return (  
    <div>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Uvod" element={<Uvod />} />
        <Route path="/Onas" element={<Onas />} />
        <Route path="/Preteky" element={<Preteky />} />
        <Route path="/Kontakt" element={<Kontakt />} />
      </Routes>
    </div>

  );
}

export default App;
