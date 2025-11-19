import { NavLink } from "react-router-dom";
import styled from "styled-components";

const sideMenu = [
  { path: "/", label: "Home" },
  { path: "/About", label: "About" },
  { path: "/Project", label: "Project" },
  { path: "/board", label: "Board" },
];

function Contact() {
  return (
    <Main>
      <Left>
        <img src="/img/jh.png" alt="contact" />
      </Left>

      <Right>
        <ContactSection>
          <ContactBox>
            <ThankTitle>감사합니다.</ThankTitle>

            <ContactCard>
              <ContactHeader>
                <ContactLabel>contact</ContactLabel>
              </ContactHeader>

              <ProfileRow>
                <Avatar>JH</Avatar>
                <div>
                  <ProfileName>정하</ProfileName>
                  <ProfileDesc>프론트엔드 지망 개발자</ProfileDesc>
                </div>
              </ProfileRow>

              <InfoList>
                <InfoRow>
                  <InfoIcon>📞</InfoIcon>
                  <span>010-2369-5406</span>
                  {/* ↑ 여기 본인 번호로 교체 */}
                </InfoRow>
                <InfoRow>
                  <InfoIcon>✉️</InfoIcon>
                  <span>giner0426@gmail.com</span>
                </InfoRow>
              </InfoList>

              <LinkButtons>
                <LinkButton
                  href="https://github.com/Jung-ha-R"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub 바로가기
                </LinkButton>
              </LinkButtons>
            </ContactCard>

            <BottomText>끝까지 봐주셔서 감사합니다.</BottomText>
            <BottomSubText>
              사람들이 편하게 사용할 수 있는 서비스를 만드는 개발자가 되기 위해
              계속해서 공부하겠습니다.
            </BottomSubText>
          </ContactBox>
        </ContactSection>

        <SideMenu>
          <SideLine />
          <SideInner>
            <SideMenuList>
              {sideMenu.map((item) => (
                <li key={item.path}>
                  <SideMenuLink to={item.path} end={item.path === "/"}>
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
        </SideMenu>
      </Right>
    </Main>
  );
}

export default Contact;

const Main = styled.main`
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 2fr);
  min-height: calc(100vh - 80px);
  background: #f4f8fd;

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

const ContactSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactBox = styled.div`
  max-width: 520px;
  text-align: center;
`;

const ThankTitle = styled.h2`
  margin: 0 0 24px;
  font-size: 32px;
  font-weight: 700;
`;

const ContactCard = styled.div`
  padding: 20px 24px 18px;
  border-radius: 12px;
  background: #4a4a4a;
  color: #f9fafb;
  text-align: left;
  margin: 0 auto 24px;
`;

const ContactHeader = styled.div`
  margin-bottom: 12px;
`;

const ContactLabel = styled.span`
  display: inline-block;
  font-size: 18px;
  font-weight: 700;
  position: relative;
  color: #ffeb3b;
  text-transform: lowercase;

  &::after {
    content: "";
    position: absolute;
    left: -4px;
    right: -4px;
    bottom: 2px;
    height: 8px;
    background: rgba(0, 0, 0, 0.35);
    z-index: -1;
  }
`;

const ProfileRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
`;

const ProfileName = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

const ProfileDesc = styled.div`
  font-size: 13px;
  opacity: 0.85;
`;

const InfoList = styled.div`
  margin-bottom: 16px;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  margin-bottom: 6px;
`;

const InfoIcon = styled.span`
  font-size: 16px;
`;

const LinkButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const LinkButton = styled.a`
  flex: 1;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid #333;
  background: #2f2f2f;
  color: #f9fafb;
  font-size: 13px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;

  &:hover {
    background: #111;
    transform: translateY(-1px);
  }
`;

const BottomText = styled.div`
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const BottomSubText = styled.div`
  font-size: 12px;
  color: #555;
`;

const SideMenu = styled.aside`
  display: flex;
  align-items: flex-start;

  @media (max-width: 1024px) {
    margin-top: 8px;
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
