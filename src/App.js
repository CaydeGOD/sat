
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ResultadosCFDI from "./Comps/ResultadosCFDI";
import Main from "./Comps/Main";
function App() {
  return (
    <div className="App">
      <Main/>
      <Router basename="/sat"> 
       <Routes>     
        {/* Ruta predeterminada para Main */}
        <Route path="/" element={<Main />} />
        <Route path="/ResultadosCFDI" element={<ResultadosCFDI/>} />
        
       </Routes>
      </Router>
    </div>
  );
}
export default App;