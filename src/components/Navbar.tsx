import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) setTheme(stored);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("light-mode", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ["about", "skills", "projects", "certificates", "contact"];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const closeMenu = () => setMobileOpen(false);

  const navItems = [
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Certificates", href: "#certificates", id: "certificates" },
    { label: "Contact", href: "#contact", id: "contact" }
  ];

  return (
    <nav className={`nav ${mobileOpen ? "open" : ""} ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-brand">
        <span className="nav-logo">💻</span>
        <h2>Sayan Banerjee</h2>
      </div>
      
      <button
        className="mobile-menu-btn"
        onClick={() => setMobileOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <div className="nav-links">
        {navItems.map((item) => (
          <a 
            key={item.id}
            href={item.href} 
            onClick={closeMenu}
            className={activeSection === item.id ? "active" : ""}
          >
            {item.label}
            <span className="nav-link-indicator"></span>
          </a>
        ))}
      </div>

      <div className="nav-actions">
        <a href="/Sayan_Banerjee_IEM2027.docx" download className="btn btn-nav-download">
          📄 Resume
        </a>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
