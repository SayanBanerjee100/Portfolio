import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(""), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="section contact-section">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>
      <motion.p
        className="section-intro"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        As a fresher software engineer, I'm eager to contribute meaningfully to a collaborative team. I'm passionate about learning from experienced developers and building impactful solutions together.
      </motion.p>

      <div className="contact-wrapper">
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="email-section">
            <span style={{ fontSize: "26px" }}>📧</span>
            <div>
              <p style={{ fontSize: "14px", color: "#94a3b8", margin: 0 }}>Email Me At</p>
              <a href="mailto:sayanbanerjee382@gmail.com" style={{ 
                color: "#38bdf8",
                fontSize: "18px",
                fontWeight: "600",
                textDecoration: "none"
              }}>
                sayanbanerjee382@gmail.com
              </a>
            </div>
          </div>
          <div style={{ marginTop: '20px' }}>
            <p style={{ margin: 0, color: '#cbd5e1', lineHeight: '1.8' }}>
              Ready to discuss backend engineering, cloud projects, internships, or collaboration opportunities.
            </p>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="contact-card"
          style={{ maxWidth: "100%", width: "100%" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 style={{ color: "#38bdf8", marginBottom: "22px" }}>Send a Message</h3>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input-field"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="input-field"
          />
          
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="textarea-field"
          />
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary"
            style={{
              width: "100%",
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? "not-allowed" : "pointer"
            }}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          
          {submitMessage && (
            <p style={{ color: "#10b981", marginTop: "18px", fontWeight: "500" }}>
              {submitMessage}
            </p>
          )}
        </motion.form>
      </div>

      <motion.div
        className="social-links"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        viewport={{ once: true }}
      >
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
      </motion.div>
    </section>
  );
}
