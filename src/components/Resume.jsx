export default function Resume() {
  return (
    <section id="resume" className="section">
      <h2>Resume</h2>

      <div className="resume-box">
        <iframe
          src="/resume.pdf"
          title="Resume"
          width="100%"
          height="500px"
        ></iframe>

        <a href="/resume.pdf" className="btn" download>
          Download Resume
        </a>
      </div>
    </section>
  );
}
