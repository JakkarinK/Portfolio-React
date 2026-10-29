import Contact from "../../components/contact";
import ProfileCarousel from "../../components/profileCarousel";
import ResumeDownloads from "../../components/resumeDownloads";
import { useTranslation } from "react-i18next";

const Homepage = () => {
  const { t } = useTranslation();
  const strengths = t("home.strengthItems", { returnObjects: true });

  return (
    <div className="page-container">
      <div className="profile-carousel-section">
        <ProfileCarousel />
      </div>
      <div className="profile-intro">
        <p className="profile-name">{t("home.name")}</p>
        <p>{t("home.nickname")}</p>
        <p>{t("home.summary")}</p>
        <p>{t("home.collaboration")}</p>
        <p>{t("home.currentRole")}</p>
      </div>
      <section aria-labelledby="strengths-title" className="profile-strengths">
        <h2 className="section-title" id="strengths-title">
          {t("home.strengths")}
        </h2>
        <div className="skill-list">
          {strengths.map((strength) => (
            <span className="skill-chip" key={strength}>
              {strength}
            </span>
          ))}
        </div>
      </section>
      <div className="profile-resume-options">
        <ResumeDownloads />
      </div>
      <Contact />
    </div>
  );
};

export default Homepage;
