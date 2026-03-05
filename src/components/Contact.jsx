export default function Contact() {
  return (
    <section id="contact" className="section contact-section" style={{ textAlign: "center" }}>
      <h2>Get In Touch</h2>
      <p style={{
        fontSize: "18px",
        color: "#cbd5e1",
        marginBottom: "40px",
        lineHeight: "1.8"
      }}>
        I'd love to hear from you! Whether you have questions, opportunities, or just want to collaborate, feel free to reach out.
      </p>
      <div className="contact-card">
        <div className="email-section">
          <span style={{ fontSize: "24px", marginRight: "12px" }}>📧</span>
          <div>
            <p style={{ fontSize: "14px", color: "#94a3b8", margin: "0 0 8px 0" }}>Email Me At</p>
            <a href="mailto:sayanbanerjee382@gmail.com" style={{ 
              color: "#38bdf8",
              fontSize: "18px",
              fontWeight: "600",
              textDecoration: "none",
              transition: "color 0.3s ease"
            }}>
              sayanbanerjee382@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="social-links">
        <a
          href="https://github.com/SayanBanerjee100"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/sayan-banerjee-0a75b428b"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.05-8.789 0-9.514h3.554v1.347c.42-.648 1.36-1.573 3.322-1.573 2.429 0 4.251 1.584 4.251 4.99v4.75zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.958.77-1.715 1.959-1.715 1.188 0 1.914.757 1.938 1.715 0 .953-.75 1.715-1.982 1.715zm1.581 11.597H3.635V9.938h3.283v10.514zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
          </svg>
          LinkedIn
        </a>
      </div>
    </section>
  );
}
