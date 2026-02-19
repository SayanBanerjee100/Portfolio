export default function Certificates() {
  const certificates = [
    {
      name: "🏆 Hackathon Finalist",
      description: "Recognized as finalist in a competitive hackathon event",
      file: "/hackathon-certificate.jpg",
      category: "Featured"
    },
    {
      name: "JPMorgan Software Engineering",
      description: "Software Engineering Virtual Internship",
      file: "/JPMorgan Software Engineering.pdf",
      category: "Internship"
    },
    {
      name: "Oracle Cloud AI Foundations",
      description: "Oracle Cloud AI Foundations Associate",
      file: "/Oracle Cloud AI Foundations Associate.pdf",
      category: "Cloud"
    },
    {
      name: "Walmart Certificate",
      description: "Walmart Advanced Software Engineering Program",
      file: "/Walmart.pdf",
      category: "Internship"
    }
  ];

  return (
    <section id="certificates" className="section">
      <h2>Certificates & Achievements</h2>

      <div className="grid">
        {certificates.map((cert, index) => (
          <div className="card" key={index}>
            <h3>{cert.name}</h3>
            <p style={{ 
              color: "#94a3b8", 
              fontSize: "14px",
              marginBottom: "15px"
            }}>
              {cert.description}
            </p>
            <p style={{
              display: "inline-block",
              background: "rgba(56, 189, 248, 0.2)",
              padding: "4px 12px",
              borderRadius: "20px",
              fontSize: "12px",
              color: "#38bdf8",
              marginBottom: "15px"
            }}>
              {cert.category}
            </p>
            <div className="cert-actions">
              <a href={cert.file} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View</a>
              <a href={cert.file} download className="btn btn-primary">Download</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
