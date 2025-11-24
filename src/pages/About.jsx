import { NavLink } from "react-router-dom";

import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";

import reactLogo from "../assets/react.png";
import stypedComponentsLogo from "../assets/styled-components.png";
import tsLogo from "../assets/ts.png";
import jqueryLogo from "../assets/jquery.png";
import phpLogo from "../assets/php.png";

import gitLogo from "../assets/github.png";
import figmaLogo from "../assets/figma.png";
import notionLogo from "../assets/notion.png";

import mysqlLogo from "../assets/mysql.png";

const MENU = [
  { path: "/", label: "Home" },
  { path: "/About", label: "About" },
  { path: "/Project", label: "Project" },
  { path: "/Contact", label: "Contact" },
];

export default function About() {
  return (
    <div className="page">
      <main className="layout">
        <section className="layout-left">
          <img
            src="https://images.unsplash.com/photo-1763315152539-06fc234b526c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile"
          />
        </section>

        <section className="layout-right">
          <section className="about-content">
            <h2 className="section-title">ABOUT ME</h2>
            <p className="section-text">
              프론트엔드 개발자를 지망하고 있는 정하림입니다. <br />
              사용자 경험과 깔끔한 인터페이스를 좋아하고, <br />
              React와 웹 퍼블리싱을 중심으로 공부하고 있습니다.
            </p>

            <h3 className="sub-title">- EDUCATION</h3>
            <ul className="list">
              <li>2016 ~ 2017 정화예술대학교 재학</li>
              <li>2025 ~ 프론트엔드 개인 프로젝트 진행 중</li>
            </ul>

            <h3 className="sub-title">- SKILL</h3>

            <div className="skill-section">
              <div className="skill-row">
                <div className="skill-label">- Basic</div>
                <ul className="skill-icons">
                  <li className="skill-icon">
                    <img src={htmlLogo} alt="HTML5" />
                  </li>
                  <li className="skill-icon">
                    <img src={cssLogo} alt="CSS3" />
                  </li>
                  <li className="skill-icon">
                    <img src={jsLogo} alt="JavaScript" />
                  </li>
                </ul>
              </div>

              <div className="skill-row">
                <div className="skill-label">- Library</div>
                <ul className="skill-icons">
                  <li className="skill-icon">
                    <img src={reactLogo} alt="React" />
                  </li>
                  <li className="skill-icon">
                    <img src={stypedComponentsLogo} alt="Styled Components" />
                  </li>
                  <li className="skill-icon">
                    <img src={tsLogo} alt="TypeScript" />
                  </li>
                  <li className="skill-icon">
                    <img src={jqueryLogo} alt="jQuery" />
                  </li>
                  <li className="skill-icon">
                    <img src={phpLogo} alt="PHP" />
                  </li>
                </ul>
              </div>

              <div className="skill-row">
                <div className="skill-label">- Others</div>
                <ul className="skill-icons">
                  <li className="skill-icon">
                    <img src={gitLogo} alt="GitHub" />
                  </li>
                  <li className="skill-icon">
                    <img src={figmaLogo} alt="Figma" />
                  </li>
                  <li className="skill-icon">
                    <img src={notionLogo} alt="Notion" />
                  </li>
                </ul>
              </div>
              
              <div className="skill-row">
                <div className="skill-label">- DataBase</div>
                <ul className="skill-icons">
                  <li className="skill-icon">
                    <img src={mysqlLogo} alt="MySQL" />
                  </li>
                </ul>
              </div>
            </div>
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
                  <a
                    href="https://github.com/Jung-ha-R"
                    target="_blank"
                    rel="noreferrer"
                  >
                  GitHub
                  </a>
                </div>
                <div className="copyright">Copyright © 2025</div>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}