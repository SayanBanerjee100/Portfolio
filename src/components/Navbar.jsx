import { useState, useEffect } from "react";

const palettes = {
  ocean: {
    name: "Ocean",
    primary: "#3b82f6",
    secondary: "#1d4ed8",
    accent: "#f59e0b",
    bg1: "#1e293b",
    bg2: "#334155",
    text: "#f1f5f9",
    btnText: "#ffffff"
  },
  sunset: {
    name: "Sunset",
    primary: "#f97316",
    secondary: "#dc2626",
    accent: "#facc15",
    bg1: "#0f172a",
    bg2: "#7c2d12",
    text: "#f8fafc",
    btnText: "#111827"
  },
  mint: {
    name: "Mint",
    primary: "#22c55e",
    secondary: "#0f766e",
    accent: "#14b8a6",
    bg1: "#031b16",
    bg2: "#064e3b",
    text: "#ecfeff",
    btnText: "#0f172a"
  },
  lavender: {
    name: "Lavender",
    primary: "#a78bfa",
    secondary: "#818cf8",
    accent: "#fb7185",
    bg1: "#111827",
    bg2: "#4338ca",
    text: "#f8fafc",
    btnText: "#1e293b"
  }
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [palette, setPalette] = useState("ocean");
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) setTheme(storedTheme);
    const storedPalette = localStorage.getItem("palette");
    if (storedPalette && palettes[storedPalette]) setPalette(storedPalette);
  }, []);

  const applyPalette = (paletteId) => {
    const selected = palettes[paletteId] || palettes.ocean;
    const root = document.documentElement.style;
    root.setProperty("--color-bg-1", selected.bg1);
    root.setProperty("--color-bg-2", selected.bg2);
    root.setProperty("--color-primary", selected.primary);
    root.setProperty("--color-secondary", selected.secondary);
    root.setProperty("--color-accent", selected.accent);
    root.setProperty("--color-text", selected.text);
    root.setProperty("--color-btn-text", selected.btnText);
  };

  useEffect(() => {
    document.body.classList.toggle("light-mode", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    applyPalette(palette);
    localStorage.setItem("palette", palette);
  }, [palette]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ["about", "skills", "education", "projects", "certificates", "contact"];
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
    { label: "Education", href: "#education", id: "education" },
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
        <div className="palette-picker" aria-label="Color palette selector">
          {Object.entries(palettes).map(([id, config]) => (
            <button
              key={id}
              type="button"
              className={`palette-button ${palette === id ? "active" : ""}`}
              onClick={() => setPalette(id)}
              title={config.name}
              aria-label={`Select ${config.name} palette`}
              style={{ background: `linear-gradient(135deg, ${config.primary}, ${config.secondary})` }}
            />
          ))}
        </div>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
