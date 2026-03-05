export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Featured Projects</h2>

      <div className="grid">
        <div className="card project-card">
          <div className="project-icon">📎</div>
          <h3>URL Shortener</h3>
          <p className="tech-stack">Spring Boot • MySQL • REST API</p>
          <p className="project-description">A robust RESTful API service for shortening long URLs with expiration tracking and analytics. Features include URL compression, redirect management, and visit statistics. Built with Spring Boot and MySQL for efficient data management and retrieval.</p>
          <div className="cert-actions">
            <a href="https://github.com/SayanBanerjee100/UrlShortener" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
          </div>
        </div>

        <div className="card project-card">
          <div className="project-icon">📔</div>
          <h3>Journal App</h3>
          <p className="tech-stack">Spring Boot • MongoDB • Docker • AWS • CI/CD</p>
          <p className="project-description">A full-stack journal application with containerization and cloud deployment. Demonstrates proficiency in backend API development, database management, Docker containerization, and CI/CD pipeline setup for automated deployment to AWS infrastructure.</p>
          <div className="cert-actions">
            <a href="https://github.com/SayanBanerjee100/journalApp" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
