// src/pages/Project.jsx
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MENU = [
  { path: "/", label: "Home" },
  { path: "/About", label: "About" },
  { path: "/Project", label: "Project" },
  { path: "/Contact", label: "Contact" },
];

function Project() {
  return (
    <div className="page">
      <main className="layout">
        <section className="layout-left">
          <img src="https://images.unsplash.com/photo-1763315152539-06fc234b526c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="camera" />
        </section>

        <section className="layout-right">
          <ProjectSection>
            <div className="titleBox">
              <span>PROJECT</span>
            </div>

            <div className="button">
              <button>All</button>
            </div>

            <div className="cards">
              <div className="card">
                <div className="thumb" />
                <h3 className="card-title">웹페이지</h3>
                <p className="card-desc">CMS를 활용한 협업</p>
              </div>

              <div className="card">
                <div className="thumb" />
                <h3 className="card-title">포트폴리오 사이트</h3>
                <p className="card-desc">React + GitHub Pages로 배포한 개인 포트폴리오</p>
              </div>

              <div className="card">
                <div className="thumb" />
                <h3 className="card-title">Todo List</h3>
                <p className="card-desc">기본 CRUD + 로컬스토리지 저장 기능</p>
              </div>
            </div>
          </ProjectSection>

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

export default Project;


const ProjectSection = styled.section`
  .titleBox {
    margin-bottom: 24px;
  }

  .titleBox span {
    display: inline-block;
    font-size: 18px;
    letter-spacing: 0.25em;
    font-weight: 700;
    color: #222;
  }

  .button {
    margin-bottom: 24px;
    display: flex;
    gap: 8px;
  }

  .button button {
    padding: 6px 16px;
    border-radius: 999px;
    border: 1px solid #ccc;
    background: #fff;
    font-size: 13px;
    cursor: pointer;
    transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
  }

  .button button:hover {
    background: #111;
    color: #fff;
    border-color: #111;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
  }

  .card {
    padding: 14px 14px 16px;
    border-radius: 12px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    box-shadow: 0 4px 8px rgba(15, 23, 42, 0.03);
  }

  .thumb {
    width: 100%;
    height: 140px;
    border-radius: 8px;
    background: #e5e7eb;
    margin-bottom: 10px;
  }

  .card-title {
    font-size: 15px;
    font-weight: 600;
    margin: 0 0 6px;
  }

  .card-desc {
    margin: 0;
    font-size: 13px;
    color: #555;
  }
`;
