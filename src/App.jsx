import { useState } from 'react'
import {Routes, Route, Link} from "react-router-dom"
import Home from'./Home';
import About from "./About";
import Contact from "./Contact";


function App() {
  return(
    <div style={{textAlign: "center"}}>
      <h1>React Router Demo</h1>

      <nav style={{marginBottom: "20px"}}>
        <Link to="/" style={{margin: "10px"}}>home</Link>
        <Link to="/About" style={{margin: "10px"}}>About</Link>
        <Link to="/Contact" style={{margin: "10px"}}>Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>
    </div>
  );
}
export default App