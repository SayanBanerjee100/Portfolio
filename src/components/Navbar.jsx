import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) setTheme(stored);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("light-mode", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const closeMenu = () => setMobileOpen(false);

  return (
    <nav className={`nav ${mobileOpen ? "open" : ""}`}>
      <h2>Sayan Banerjee</h2>
      <button
        className="mobile-menu-btn"
        onClick={() => setMobileOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <div className="nav-links">
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#resume" onClick={closeMenu}>Resume</a>
        <a href="#certificates" onClick={closeMenu}>Certificates</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}
