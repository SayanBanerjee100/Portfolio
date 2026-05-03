export default function Resume() {
  return (
    <section id="resume" className="section">
      <h2>Resume</h2>

      <div className="resume-box">
        <div className="resume-preview">
          <p>Download my Resume below:</p>
        </div>

        <div className="resume-actions">
          <a href="/RESUME.docx" download className="btn btn-primary">📄 Download Resume</a>
        </div>
      </div>
    </section>
  );
}
