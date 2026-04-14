import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section 
      className="hero"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
      </div>

      <div className="hero-grid">
        <div className="hero-copy">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Hi, I'm Sayan Banerjee 👋
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Software Engineer with a strong foundation in backend systems, Spring Boot, and cloud-ready architecture. I build fast, reliable APIs and deliver polished digital experiences.
          </motion.p>

          <motion.div 
            className="btn-group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </motion.div>
        </div>

        <motion.div
          className="hero-panel"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.div 
            className="profile-image-container"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <img 
              src="/profile.jpg" 
              alt="Profile" 
              className="profile-image"
              onError={(e) => e.target.src = "https://via.placeholder.com/240?text=Your+Photo"}
            />
          </motion.div>

          <p className="section-intro" style={{ marginTop: '24px' }}>
            Backend + Cloud focused developer with experience in Spring Boot, Docker, AWS, and REST architecture. Ready to bring strong engineering habits and polished execution to your next team.
          </p>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '16px', marginTop: '24px' }}>
            <div className="highlight-item">
              <span className="highlight-icon">⚙️</span>
              <h4>Spring Boot APIs</h4>
              <p>Clean, scalable backend design for web apps.</p>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">☁️</span>
              <h4>Cloud Ready</h4>
              <p>Docker, AWS, and infrastructure-aware build practices.</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a 
        href="#projects" 
        className="scroll-down" 
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        ↓
      </motion.a>
    </motion.section>
  );
}
