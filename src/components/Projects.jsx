export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="grid">
        <div className="card">
          <h3>Phishing Link and Email Detector</h3>
          <p>Web Application | React</p>
          <div className="cert-actions">
            <a href="https://main.d336fc2r5vjb84.amplifyapp.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live Demo</a>
            <a href="https://github.com/SayanBanerjee100/PhishingDetector" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
          </div>
        </div>

        <div className="card">
          <h3>Journal App</h3>
          <p>Spring Boot, MongoDB, Docker, AWS, CI/CD</p>
          <div className="cert-actions">
            <a href="https://journalapp-1-k4t0.onrender.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live Demo</a>
            <a href="https://github.com/SayanBanerjee100/journalApp" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
