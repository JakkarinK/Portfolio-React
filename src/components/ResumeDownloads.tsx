import EnglishPortfolio from "../assets/resume/portfolioEn.pdf";
import ThaiPortfolio from "../assets/resume/portfolioTh.pdf";
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
        download="portfolioEn.pdf"
        href={EnglishPortfolio}
      >
        {t("resume.english")}
      </a>
      <a
        className="resume-choice"
        download="portfolioTh.pdf"
        href={ThaiPortfolio}
      >
        {t("resume.thai")}
      </a>
    </div>
  );
};

export default ResumeDownloads;
