const projects = [
  {
    title: "Kingina nyo mga ocakes fam",
    description: "tite pepe and lumpia.",
    tech: "Next.js • CSS • JavaScript"
  },
  {
    title: "Putangina",
    description: "Puking ina nyo mga tanga.",
    tech: "HTML • CSS • JavaScript"
  },
  {
    title: "Kingina",
    description: "tangina nyo Cj, Ernes, Jp, Sergi @ everyone.",
    tech: "Web Design • UI"
  }
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#home">JR<span>.</span></a>
        <div className="links">
          <a href="#home">Pukingina</a>
          <a href="#education">Tangina</a>
          <a href="#projects">Bobo</a>
          <a href="#about">Tite</a>
          <a href="#contact">Pepe</a>
        </div>
        <a className="navButton" href="#contact">kantutan</a>
      </nav>

      <section id="home" className="hero section">
        <div className="heroText">
          <p className="eyebrow">IYOT • HERE • IYOT EVERYWHERE</p>
          <h1>I build digital<br />tools that <span>move</span><br />ideas forward.</h1>
          <p className="lead">
            Hi, I'm <b>Abdul Jacool Salsalani</b>, a college student interested in
            Kantutan software, education Iyotan, and kain pepe.
          </p>
          <div className="actions">
            <a className="primary" href="#projects">Explore my bullshit ↗</a>
            <a className="secondary" href="#contact">Iyot me</a>
          </div>
        </div>
        <div className="heroCard">
          <div className="avatar">TITE</div>
          <h2>Abdul Jacool Salsalani</h2>
          <p>Student Iyotan</p>
          <div className="tagRow">
            <span>Next.js</span><span>JavaScript</span><span>CSS</span>
          </div>
          <div className="miniInfo">
            <span>📍 Bikini Bottom, Philippines</span>
            <span>🎓 Kinder Student</span>
          </div>
        </div>
      </section>

      <section id="education" className="section light">
        <p className="eyebrow">PUKINGINA</p>
        <h2 className="sectionTitle">Tite</h2>
        <div className="educationCard">
          <div className="eduIcon">🎓</div>
          <div>
            <h3>Bikini Bottom Of South East Asia</h3>
            <p>College Student • Information Technology / Computing</p>
            <p className="muted">Focused in iyutan company and kantutan in everyplace i go.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <p className="eyebrow">PROJECT</p>
        <h2 className="sectionTitle">Things I've sex on</h2>
        <div className="grid">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <div className="projectNumber">0{projects.indexOf(project) + 1}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <small>{project.tech}</small>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section light about">
        <div>
          <p className="eyebrow">PEPE</p>
          <h2 className="sectionTitle">Learning by sex.</h2>
        </div>
        <p>
          I'm a college student who enjoys eating pepe and mulmol tite because it enjoys to do it. And sex is my daily life.
        </p>
      </section>

      <section id="contact" className="section contact">
        <p className="eyebrow">CONTACT</p>
        <h2 className="sectionTitle">Let's build baby.</h2>
        <p className="lead">Have a project, sex activity, or idea? Send me a message.</p>
        <div className="contactBox">
          <a href="mailto:cjdigal69@gmail.com">cj,ernes,jp,sergikantutan69@gmail.com</a>
          <span>•</span>
          <span>Philippines</span>
        </div>
      </section>

      <footer>
        <span>© 2026 Jhade Rick N. Rios</span>
        <span>Built with Next.js + CSS</span>
      </footer>
    </main>
  );
}
