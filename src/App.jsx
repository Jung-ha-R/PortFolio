import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">JH&apos;s</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#project">Project</a>
          <a href="#skills">Skills</a>
        </nav>
      </header>

      <main>
        <section id="home" className="section home">
          <div className="home-image" />
          <div className="home-content">
            <div className="home-inner">
              <h2 className="home-title">JUNG HA</h2>
              <div className="home-line" />
              <p className="home-sub">Creative Developer</p>
              <button
                className="home-button"
                onClick={() => {
                  document
                    .querySelector('#project')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Project
              </button>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <h3>About</h3>
          <p>자기소개 영역</p>
        </section>

        <section id="project" className="section">
          <h3>Project</h3>
          <div className="projects-grid">
            <article className="projects-card">
              <h4>프로젝트 1</h4>
              <p>프로젝트 설명</p>
            </article>
          </div>
        </section>

        <section id="skills" className="section">
          <h3>Skills</h3>
          <p>기술</p>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} JUNG HA. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
