import EnglishPortfolio from "../assets/resume/Portfolio_EN.pdf";
import ThaiPortfolio from "../assets/resume/Portfolio_TH.pdf";
import { useTranslation } from "react-i18next";

const ResumeDownloads = () => {
  const { t } = useTranslation();

  return (
    <div
      aria-label={t("resume.download")}
      className="resume-download-options"
      role="group"
    >
      <a
        className="resume-choice"
        download="Portfolio_EN.pdf"
        href={EnglishPortfolio}
      >
        {t("resume.english")}
      </a>
      <a
        className="resume-choice"
        download="Portfolio_TH.pdf"
        href={ThaiPortfolio}
      >
        {t("resume.thai")}
      </a>
    </div>
  );
};

export default ResumeDownloads;
