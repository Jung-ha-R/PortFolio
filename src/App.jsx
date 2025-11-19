// App.jsx
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Board from "./pages/Contact";
import "./App.css";

const MENU = [
  { path: "/", label: "Home" },
  { path: "/About", label: "About" },
  { path: "/Project", label: "Project" },
  { path: "/contact", label: "Contact" },
];

function App() {
  return (
    <>
      <header className="header">
        <nav className="top-nav">
          <div className="logo">
            <NavLink to="/">HR&apos;s</NavLink>
          </div>

          <div className="menu">
            <ul>
              {MENU.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    end={item.path === "/"}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* 페이지 영역 */}
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/contact" element={<Board />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
