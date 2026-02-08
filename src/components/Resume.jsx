export default function Resume() {
  return (
    <section id="resume" className="section">
      <h2>Resume</h2>

      <div className="resume-box">
        <div className="resume-preview">
          <p>Download my CV below:</p>
        </div>

        <div className="resume-actions">
          <a href="/Sayan_Banerjee_CV.docx" download className="btn btn-primary">📄 Download CV (DOCX)</a>
        </div>
      </div>
    </section>
  );
}
