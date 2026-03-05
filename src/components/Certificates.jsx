export default function Certificates() {
  const certificates = [
    {
      name: "🏆 Hackathon Finalist",
      description: "Led a 3-member team in the design and development of a Phishing Link and Email Detection web application aimed at identifying fraudulent links and emails. Implemented process improvements and automation solutions, resulting in 15% increase in productivity.",
      file: "/hackathon-certificate.jpg",
      category: "Achievement"
    },
    {
      name: "JPMorgan Software Engineering",
      description: "Worked on practical software engineering challenges, focusing on backend logic, debugging, and system design concepts used in enterprise-scale applications.",
      file: "/JPMorgan Software Engineering.pdf",
      category: "Certificate"
    },
    {
      name: "Oracle Cloud AI Foundations",
      description: "Gained foundational knowledge of cloud computing concepts, AI services, machine learning basics, and Oracle Cloud Infrastructure core services.",
      file: "/Oracle Cloud AI Foundations Associate.pdf",
      category: "Certificate"
    },
    {
      name: "Walmart Certificate",
      description: "Completed advanced software engineering tasks involving problem-solving, code optimization, and real-world engineering workflows aligned with industry standards.",
      file: "/Walmart.pdf",
      category: "Certificate"
    }
  ];

  return (
    <section id="certificates" className="section">
      <h2>Certificates & Achievements</h2>

      <div className="grid">
        {certificates.map((cert, index) => (
          <div className="card cert-card" key={index}>
            <div className="cert-header">
              <h3>{cert.name}</h3>
              <span className={`cert-badge ${cert.category.toLowerCase()}`}>
                {cert.category}
              </span>
            </div>
            <p style={{ 
              color: "#94a3b8", 
              fontSize: "14px",
              lineHeight: "1.6"
            }}>
              {cert.description}
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
