export default function Education() {
  const education = [
    {
      institution: "Assembly of Angels Secondary School",
      location: "Barrackpore, Kolkata",
      grade: "84.6%",
      type: "Percentage",
      image: "/images.jpg"
    },
    {
      institution: "St. Augustine's Day School",
      location: "Barrackpore, Kolkata",
      grade: "81.33%",
      type: "Percentage",
      image: "/images2.jpg"
    },
    {
      institution: "Institute of Engineering and Management",
      location: "Kolkata",
      grade: "7.99",
      type: "CGPA",
      image: "/images3.jpg"
    }
  ];

  return (
    <section id="education" className="section">
      <h2>Education</h2>

      <div className="grid">
        {education.map((edu, index) => (
          <div className="card education-card" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="education-image">
              <img src={edu.image} alt={`${edu.institution} certificate`} />
            </div>
            <div className="education-content">
              <h3>{edu.institution}</h3>
              <p className="education-location">{edu.location}</p>
              <div className="education-grade">
                <span className="grade-value">{edu.grade}</span>
                <span className="grade-type">{edu.type}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}