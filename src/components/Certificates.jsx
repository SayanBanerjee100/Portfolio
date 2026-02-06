export default function Certificates() {
  const certificates = [
    { name: "AWS Certificate", file: "/cert1.pdf" },
    { name: "Docker Certificate", file: "/cert2.pdf" },
    { name: "Java Certificate", file: "/cert3.png" }
  ];

  return (
    <section id="certificates" className="section">
      <h2>Certificates</h2>

      <div className="grid">
        {certificates.map((cert, index) => (
          <div className="card" key={index}>
            <h3>{cert.name}</h3>
            <a href={cert.file} target="_blank">View</a>
          </div>
        ))}
      </div>
    </section>
  );
}
