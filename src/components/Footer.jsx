import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <motion.div
          className="footer-brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="section-label">Thank you for visiting</p>
          <h3>Sayan Banerjee</h3>
          <p>
            Software Engineer crafting polished web experiences with modern design, performance, and motion-driven UI.
          </p>
        </motion.div>

        <motion.div
          className="footer-links"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <a
            className="footer-link"
            href="https://github.com/SayanBanerjee100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>🐙</span> GitHub
          </a>
          <a
            className="footer-link"
            href="https://linkedin.com/in/sayan-banerjee-0a75b428b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>🔗</span> LinkedIn
          </a>
          <a
            className="footer-link"
            href="mailto:sayanbanerjee382@gmail.com"
          >
            <span>📧</span> Email
          </a>
        </motion.div>

        <motion.div
          className="footer-note"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} Sayan Banerjee. All rights reserved.</p>
          <p>
            Built with <span className="footer-heart">❤️</span> using Vite and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}