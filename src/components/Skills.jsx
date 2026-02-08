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
            <li>PostgreSQL & MongoDB</li>
            <li>JPA/Hibernate</li>
          </ul>
        </div>

        <div>
          <h3>Cloud & DevOps</h3>
          <ul>
            <li>Docker</li>
            <li>AWS Basics (EC2, S3)</li>
            <li>Git & GitHub</li>
            <li>Basic CI/CD</li>
          </ul>
        </div>

        <div>
          <h3>Frontend</h3>
          <ul>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Responsive Design</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
