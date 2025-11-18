import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <header className='header'>
        <h1 className='logo'>JUNG HARIM</h1>
        <nav className='nav'>
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#skills'>Skills</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
        </nav>
        </header>
      </div>

      <main>
        <section id='home' className='section home'>
          <p>Frontend Developer</p>
          <button onClick={() => document.querySelector('#projects')
            ?.scrollIntoView({ behavior: 'smooth' })}>
            Project
          </button>
        </section>
      </main>

      <selction id='about' className='section'>
        <h2>About</h2>
        <p>아 뭐 적어 ㅅㅂ</p>
      </selction>

      <section id='skills' className='section'>
        <h2>Skills</h2>
        <ul className='chips'>
          <li>HTML/CSS</li>
          <li>React</li>
          <li>나 언어 뭐 할줄 앎? 하</li>
          <li></li>
        </ul>
      </section>

      <section id='project' className='section'>
        <h2>Project</h2>
        <div className='project-list'>
          <article className='project-card'>
            <h3>EXORIA</h3>
            <p>홈 만듦</p>
            <div className='project-link'>
              <a href='https://exoria.world/' target='_blank' rel='noreferrer'>Site</a>
              <a href='' target='_blank' rel='noreferrer'>GitHub</a>
            </div>
          </article>
        </div>
      </section>

      <section id='contact' className='section'>
        <h2>Contact</h2>
        <p>Email: <a href='mailto:giner0426@gmail.com'>giner0426@gmail.com</a></p>
        <p>GitHub: <a href='https://github.com/Jung-ha-R'>gitHub.com/Jung-ha-R</a></p>
      </section>

      <footer className='footer'>
        2025 ⓒ JUNG HARIM All rights reserved.
      </footer>
    </>
  )
}

export default App
