import { NavLink } from "react-router-dom";

const MENU = [
  { path: "/", label: "Home" },
  { path: "/About", label: "About" },
  { path: "/Project", label: "Project" },
  { path: "/Contact", label: "Contact" },
];

export default function About() {
  return (
    <div className="layout">
      <div className="layout-left">
        <img src="/img/jh.png" alt="img" />
      </div>

      <div className="layout-right">
        <section className="about-content">
          <h2 className="section-title">ABOUT ME</h2>
          <p className="section-text">
            프엔 개발자 지망생 정하림입니다.
          </p>

          <h3 className="sub-title">- EDUCATION</h3>
          <ul className="list">
            <li></li>
          </ul>

          <h3 className="sub-title">- CERTIFICATE</h3>
          <ul className="list">
            <li></li>
          </ul>
        </section>

        <aside className="side-menu">
          <div className="side-line" />
          <div className="side-links">
            <ul className="menuList">
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

            <div className="etc">
              <div className="githublogo">
                <a href="https://github.com/Jung-ha-R" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
              <div className="copyright">Copyright © 2025</div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
