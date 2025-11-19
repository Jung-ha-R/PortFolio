import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const sideMenu = [
  { path: "/", label: "Home" },
  { path: "/About", label: "About" },
  { path: "/Project", label: "Project" },
  { path: "/Contact", label: "Contact" },
];

const words = ["Newcomer", "Developer", "Thinker"];

function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Page>
      <Main>
        <Left>
          <img src="https://images.unsplash.com/photo-1763315152539-06fc234b526c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="home" />
        </Left>

        <Right>
          <HeroSection>
            <HeroInner>
              <Name>JUNG HARIM</Name>
              <Line />
              <HeroTitle>
                Creative
                <TextAniBox>
                  {words.map((word, i) => (
                    <Word key={word} $active={i === index}>
                      {word}
                    </Word>
                  ))}
                </TextAniBox>
              </HeroTitle>

              <HeroButtonWrap>
                <HeroButton to="/Project">project</HeroButton>
              </HeroButtonWrap>
            </HeroInner>
          </HeroSection>

          <HomeSideMenu>
            <SideLine />
            <SideInner>
              <SideMenuList>
                {sideMenu.map((item) => (
                  <li key={item.path}>
                    <SideMenuLink
                      to={item.path}
                      end={item.path === "/"}
                    >
                      {item.label}
                    </SideMenuLink>
                  </li>
                ))}
              </SideMenuList>

              <SideEtc>
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
              </SideEtc>
            </SideInner>
          </HomeSideMenu>
        </Right>
      </Main>
    </Page>
  );
}

export default Home;

const Page = styled.div`
  background: #f4f8fd;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1024px) {
    justify-content: center; 
  }
`;
const Main = styled.main`
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 2fr);
  min-height: calc(100vh - 80px);
  max-width: 1280px;
  width: 100%;
  margin: 0;

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

const HeroSection = styled.section`
  display: flex;
  align-items: center;
`;

const HeroInner = styled.div`
  max-width: 420px;
`;

const Name = styled.h3`
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 16px;
`;

const Line = styled.span`
  display: block;
  width: 80px;
  height: 3px;
  background: #222;
  margin-bottom: 20px;
`;

const HeroTitle = styled.h3`
  margin: 0 0 32px;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

const TextAniBox = styled.div`
  position: relative;
  overflow: hidden;
  height: 1.2em;
  min-width: 110px;
`;

const Word = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  white-space: nowrap;
  opacity: ${(props) => (props.$active ? 1 : 0)};
  transform: translateY(${(props) => (props.$active ? "0%" : "100%")});
  transition: opacity 0.4s ease, transform 0.4s ease;
`;

const HeroButtonWrap = styled.div`
  margin-top: 8px;
`;

const HeroButton = styled(NavLink)`
  display: inline-block;
  padding: 10px 26px;
  border-radius: 999px;
  text-decoration: none;
  background: #222;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  text-transform: lowercase;
  transition: background 0.2s ease, transform 0.1s ease;

  &:hover {
    background: #000;
    transform: translateY(-1px);
  }
`;

const HomeSideMenu = styled.aside`
  display: flex;
  align-items: flex-start;
  margin-left: 24px;

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

const SideLine = styled.div`
  width: 2px;
  height: 100%;
  background: #cccccc;
  margin-right: 16px;

  @media (max-width: 1024px) {
    height: 80px;
  }
`;

const SideInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SideMenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li + li {
    margin-top: 8px;
  }
`;

const SideMenuLink = styled(NavLink)`
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

const SideEtc = styled.div`
  margin-top: 40px;
  font-size: 12px;
  color: #555;

  .githublogo a {
    text-decoration: none;
    color: inherit;
  }

  .copyright {
    margin-top: 8px;
  }
`;