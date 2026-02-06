export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="grid">
        <div>
          <h3>Backend</h3>
          <ul>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>REST APIs</li>
            <li>Kafka, Redis</li>
          </ul>
        </div>

        <div>
          <h3>Cloud & DevOps</h3>
          <ul>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>AWS (EC2, S3)</li>
            <li>GitHub Actions</li>
          </ul>
        </div>

        <div>
          <h3>Frontend</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
