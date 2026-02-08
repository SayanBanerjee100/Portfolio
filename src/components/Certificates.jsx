export default function Certificates() {
  const certificates = [
    { name: "JPMorgan Certificate", file: "/JPMorgan Software Engineering.pdf" },
    { name: "Oracle Cloud AI Foundations", file: "/Oracle Cloud AI Foundations Associate.pdf" },
    { name: "Walmart Certificate", file: "/Walmart.pdf" }
  ];

  return (
    <section id="certificates" className="section">
      <h2>Certificates</h2>

      <div className="grid">
        {certificates.map((cert, index) => (
          <div className="card" key={index}>
            <h3>{cert.name}</h3>
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
