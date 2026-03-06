export default function Skills() {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: ["Java", "Spring Boot"],
      icon: "⚙️"
    },
    {
      title: "Databases & DBMS", 
      skills: ["PostgreSQL", "MongoDB", "DBMS Concepts"],
      icon: "🗄️"
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "CI/CD Fundamentals", "Git", "Github"],
      icon: "☁️"
    },
    {
      title: "Computer Science Fundamentals",
      skills: ["DSA", "OS", "CN", "System Design Fundamentals"],
      icon: "🧠"
    }
  ];

  return (
    <section id="skills" className="section">
      <h2>Skills & Expertise</h2>

      <div className="grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-card">
            <div className="skill-header">
              <span className="skill-icon">{category.icon}</span>
              <h3>{category.title}</h3>
            </div>
            <div className="skill-list">
              {category.skills.map((skill, i) => (
                <div key={i} className="skill-badge">
                  <span className="skill-dot"></span>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
