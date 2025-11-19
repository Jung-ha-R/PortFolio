import { NavLink } from "react-router-dom";

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
          <img src="https://images.unsplash.com/photo-1763315152539-06fc234b526c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile" />
        </section>

        <section className="layout-right">
          <section className="about-content">
            <h2 className="section-title">ABOUT ME</h2>
            <p className="section-text">
              프론트엔드 개발자를 지망하고 있는 정하림입니다.  
              사용자 경험과 깔끔한 인터페이스를 좋아하고,  
              React와 웹 퍼블리싱을 중심으로 공부하고 있습니다.
            </p>

            <h3 className="sub-title">- EDUCATION</h3>
            <ul className="list">
              <li>2016 ~ 2017 정화예술대학교 재학</li>
              <li>2025 ~ 프론트엔드 개인 프로젝트 진행 중</li>
            </ul>

            <h3 className="sub-title">- CERTIFICATE</h3>
            <ul className="list">
              <li>추가 예정</li>
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
