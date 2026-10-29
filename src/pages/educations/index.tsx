import TU from "../../assets/images/campus/tu.png";
import SKR from "../../assets/images/campus/skr.png";
import { useTranslation } from "react-i18next";

type EducationTranslationKey = "university" | "school";

const education: { cover: string; translationKey: EducationTranslationKey }[] = [
  {
    cover: TU,
    translationKey: "university",
  },
  {
    cover: SKR,
    translationKey: "school",
  },
];

const Educations = () => {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <h1 className="section-title">{t("education.title")}</h1>
      <div className="education-grid">
        {education.map(({ cover, translationKey }) => {
          const title = t(`education.${translationKey}.title`);

          return (
            <article className="education-card" key={translationKey}>
              <img alt={t("education.logoAlt", { title })} src={cover} />
              <div>
                <h3>{title}</h3>
                <p className="education-date">
                  {t(`education.${translationKey}.date`)}
                </p>
                <p>{t(`education.${translationKey}.program`)}</p>
                <p>{t(`education.${translationKey}.location`)}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Educations;
