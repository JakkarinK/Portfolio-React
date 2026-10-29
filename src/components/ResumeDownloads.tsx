import EnglishPortfolio from "../assets/resume/Portfolio_EN.pdf";
import ThaiPortfolio from "../assets/resume/Portfolio_TH.pdf";

const ResumeDownloads = () => (
  <div
    aria-label="Download portfolio"
    className="resume-download-options"
    role="group"
  >
    <a
      className="resume-choice"
      download="Portfolio_EN.pdf"
      href={EnglishPortfolio}
    >
      Portfolio (EN)
    </a>
    <a
      className="resume-choice"
      download="Portfolio_TH.pdf"
      href={ThaiPortfolio}
    >
      Portfolio (TH)
    </a>
  </div>
);

export default ResumeDownloads;
