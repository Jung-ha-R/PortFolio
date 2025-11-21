import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PDF_BASE_URL = `${import.meta.env.BASE_URL}pdfs/`;

const SIDE_MENU = [
  { path: "/", label: "Home" },
  { path: "/About", label: "About" },
  { path: "/Project", label: "Project" },
  { path: "/Contact", label: "Contact" },
];

const PROJECTS = [
  {
    id: 1,
    title: "EXORIA",
    description: "CMS를 활용한 텍스트 기반 RPG 웹 사이트 협업",
    file: `${PDF_BASE_URL}webpage.pdf`,
  },
  {
    id: 2,
    title: "포트폴리오 사이트",
    description: "React + GitHub Pages로 배포한 개인 포트폴리오",
    file: `${PDF_BASE_URL}portfolio.pdf`,
  },
  {
    id: 3,
    title: "Todo List",
    description: "기본 CRUD + 로컬스토리지 저장 기능",
    file: `${PDF_BASE_URL}todo.pdf`,
  },
];

function Project() {
  return (
    <Main>
      <Left>
        <img
          src="https://images.unsplash.com/photo-1763315152539-06fc234b526c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="workspace"
        />
      </Left>

      <Right>
        <ProjectSection>
          <div className="titleBox">
            <span>PROJECT</span>
          </div>

          <div className="button">
            <button>All</button>
          </div>

          <div className="cards">
            {PROJECTS.map((p) => (
              <a
                key={p.id}
                href={p.file}
                target="_blank"
                rel="noreferrer"
                className="project-card"
              >
                <div className="thumb" />
                <div className="info">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </div>
              </a>
            ))}
          </div>
        </ProjectSection>

        <SideMenu>
          <div className="line" />
          <div className="inner">
            <ul className="menuList">
              {SIDE_MENU.map((item) => (
                <li key={item.path}>
                  <MenuLink to={item.path} end={item.path === "/"}>
                    {item.label}
                  </MenuLink>
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
        </SideMenu>
      </Right>
    </Main>
  );
}

export default Project;


const Main = styled.main`
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 2fr);
  min-height: calc(100vh - 80px);
  background: #f4f8fd;

  max-width: 1980px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

const Left = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
  }

  @media (max-width: 1024px) {
    img {
      height: 280px;
    }
  }
`;

const Right = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 3fr) 200px;
  padding: 40px 40px 80px;
  box-sizing: border-box;
  column-gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 24px 20px 40px;
    row-gap: 24px;
  }
`;

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

  .project-card {
    display: block;
    padding: 14px 14px 16px;
    border-radius: 12px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    box-shadow: 0 4px 8px rgba(15, 23, 42, 0.03);
    text-decoration: none;
    color: inherit;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }

  .project-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(15, 23, 42, 0.08);
  }

  .thumb {
    width: 100%;
    height: 140px;
    border-radius: 8px;
    background: #e5e7eb;
    margin-bottom: 10px;
  }

  .info h3 {
    font-size: 15px;
    font-weight: 600;
    margin: 0 0 6px;
  }

  .info p {
    margin: 0;
    font-size: 13px;
    color: #555;
  }
`;

const SideMenu = styled.aside`
  display: flex;
  align-items: flex-start;
  justify-self: end;

  .line {
    width: 2px;
    height: 100%;
    background: #cccccc;
    margin-right: 16px;
  }

  .inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .menuList {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .menuList li + li {
    margin-top: 8px;
  }

  .etc {
    margin-top: 40px;
    font-size: 12px;
    color: #555;
  }

  .githublogo a {
    text-decoration: none;
    color: inherit;
  }

  .copyright {
    margin-top: 8px;
  }

  @media (max-width: 1024px) {
    justify-self: flex-start;

    .line {
      height: 80px;
    }
  }
`;

const MenuLink = styled(NavLink)`
  display: inline-block;
  padding: 4px 12px;
  font-size: 14px;
  color: #666;
  text-decoration: none;
  border-radius: 999px;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: #111;
    color: #fff;
  }

  &.active {
    background: #111;
    color: #fff;
    font-weight: 600;
  }
`;