export default function About() {
  return (
    <section id="about" className="section about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-card">
          <p style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#cbd5e1",
            maxWidth: "800px",
            margin: "0 auto"
          }}>
            I'm a fresher software engineer passionate about backend development with strong foundational knowledge in Spring Boot. I have hands-on experience building RESTful APIs, working with databases like MongoDB and MySQL, and containerizing applications with Docker. I'm eager to learn cloud technologies and DevOps practices while writing clean, maintainable code.
          </p>
          <p style={{
            fontSize: "16px",
            lineHeight: "1.8",
            color: "#94a3b8",
            maxWidth: "800px",
            margin: "30px auto 0",
            fontStyle: "italic"
          }}>
            I'm committed to continuous learning and growth, always ready to take on new challenges and collaborate with experienced developers. I believe in writing quality code, understanding system design, and contributing meaningfully to projects that matter.
          </p>
        </div>

        <div className="about-highlights">
          <div className="highlight-item">
            <span className="highlight-icon">🎓</span>
            <h4>Fresher Developer</h4>
            <p>Recent graduate with strong CS fundamentals</p>
          </div>
          <div className="highlight-item">
            <span className="highlight-icon">💻</span>
            <h4>Backend Specialist</h4>
            <p>Focused on Java & Spring Boot development</p>
          </div>
          <div className="highlight-item">
            <span className="highlight-icon">🚀</span>
            <h4>Cloud Ready</h4>
            <p>Learning modern deployment & DevOps practices</p>
          </div>
        </div>
      </div>
    </section>
  );
}
