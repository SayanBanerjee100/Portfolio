export default function Contact() {
  return (
    <section id="contact" className="section" style={{ textAlign: "center" }}>
      <h2>Get In Touch</h2>
      <p style={{
        fontSize: "18px",
        color: "#cbd5e1",
        marginBottom: "40px"
      }}>
        Feel free to reach out for opportunities, collaboration, or just to connect!
      </p>
      <p style={{
        fontSize: "18px",
        marginBottom: "30px",
        color: "#38bdf8",
        fontWeight: "600"
      }}>Email: <a href="mailto:sayan@email.com" style={{ color: "#38bdf8" }}>sayan@email.com</a></p>
      <div className="social-links">
        <a
          href="https://github.com/SayanBanerjee100"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <span>💻</span> GitHub
        </a>
        <a
          href="https://linkedin.com/in/sayan-banerjee-0a75b428b"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <span>💼</span> LinkedIn
        </a>
      </div>
    </section>
  );
}
