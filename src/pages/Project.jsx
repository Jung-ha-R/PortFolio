import { NavLink } from "react-router-dom";
import styled from "styled-components";

const sideMenu = [
  { path: "/", label: "Home" },
  { path: "/About", label: "About" },
  { path: "/Project", label: "Project" },
  { path: "/Contact", label: "Contact" },
];

function Project() {
  return (
    <Main>
      <Left>
        <img src="./img/jh.png" alt="img" />
      </Left>

      <Right>
        <Section>
          <div className="titleBox">
            <span>Project</span>
          </div>

          <div className="button">
            <button>All</button>
          </div>

          <div className="cards">
            {/* 프로젝트 카드 */}
          </div>
        </Section>

        <SideMenu>
          <div className="line" />
          <div className="inner">
            <ul className="menuList">
              {sideMenu.map((item) => (
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

  max-width: 1280px;
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

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 24px 20px 40px;
    row-gap: 24px;
  }
`;

const Section = styled.section`
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
`;

const SideMenu = styled.aside`
  display: flex;
  align-items: flex-start;
  margin-left: 24px;

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
    margin-left: 0;

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
