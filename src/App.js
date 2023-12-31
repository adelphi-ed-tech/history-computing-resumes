import { Outlet, Link, Routes, Route } from "react-router-dom";

import Al_Khwarizmi from "./Al_Khwarizmi";
import Alan_Turing from "./Alan_Turing";
import Grace_Hopper from "./Grace_Hopper";

import "./styles.css";

function App() {
  return (
    <div className="App container-lg">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index path="/" element={<Directory />} />
                  <Route path="al-khwarizmi" element={<Al_Khwarizmi />} />
                  <Route path="grace-hopper" element={<Grace_Hopper />} />
                  <Route path="alan-turing" element={<Alan_Turing />} />
        </Route>
      </Routes>
    </div>
  );
}

function Main() {
  return (
    <div>
      <Outlet />
      <footer>
          <Link to="/">History of Computing Resumes</Link>
      </footer>
    </div>
);
}

function Directory() {
  return (
    <div>
      <ol>
        <li>
          <Link to="al-khwarizmi">al-Khwarizmi, Muhammad ibn Musa</Link>
        
        </li>
        <li>Babbage, Charles</li>
        <li>Berners-Lee, Tim</li>
        <li>Bush, Vannevar</li>
        <li>Dijkstra, Edsger</li>
        <li>Englebart, Douglas</li>
        <li> <Link to="Grace-Hopper">Hopper, Grace</Link></li>
        <li>Johnson, Katherine</li>
        <li>Knuth, Donald</li>
        <li>Lovelace, Ada</li>
        <li>Shannon, Claude</li>
        <li>Torvalds, Linus</li>
        <li> <Link to="Alan-Turing">Turing, Alan </Link></li>
        <li>von Neumann, John</li>
        <li>Wing, Jeanette</li>
      </ol>
    </div>
  );
}

export default App;
