export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="grid">
        <div className="card">
          <h3>URL Shortener</h3>
          <p>Spring Boot, MySQL, REST API</p>
          <p style={{ fontSize: "14px", color: "#94a3b8", marginTop: "10px" }}>A RESTful API service for shortening long URLs with expiration tracking and analytics. Built with Spring Boot and MySQL for efficient URL management and retrieval.</p>
          <div className="cert-actions">
            <a href="https://github.com/SayanBanerjee100/UrlShortener" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
          </div>
        </div>

        <div className="card">
          <h3>Journal App</h3>
          <p>Spring Boot, MongoDB, Docker, AWS, CI/CD</p>
          <div className="cert-actions">
            <a href="https://github.com/SayanBanerjee100/journalApp" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
