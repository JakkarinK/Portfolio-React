import { useTranslation } from "react-i18next";

import Chillaid from "../../assets/images/projects/chillaid.png";
import Coffee from "../../assets/images/projects/coffeeStyle.png";
import DnDKit from "../../assets/images/projects/dndKit.png";
import Dashboard from "../../assets/images/projects/mainboardReact.png";
import EJ2 from "../../assets/images/projects/ej2.png";
import SurveyJS from "../../assets/images/projects/surveyJs.png";
import Furni from "../../assets/images/projects/furni.png";
import Bootstrap from "../../assets/images/icons/bootstrap5.svg";
import CSS from "../../assets/images/icons/css.svg";
import FluentUI from "../../assets/images/icons/fluentui.svg";
import HTML from "../../assets/images/icons/html.svg";
import JavaScript from "../../assets/images/icons/javascript.svg";
import PrimeFlex from "../../assets/images/icons/primeFlex.png";
import PrimeReact from "../../assets/images/icons/primereact.svg";
import ReactJS from "../../assets/images/icons/reactJs.svg";
import Tailwind from "../../assets/images/icons/tailwind.svg";
import TypeScript from "../../assets/images/icons/typescript.svg";
import type { Technology } from "../../components/technologyList";
import TechnologyList from "../../components/technologyList";

type Project = {
  date?: string;
  title: string;
  description: string;
  technologies: Technology[];
  image?: string;
  website?: string;
  organization?: string;
};

const lexnetixTechnologies: Technology[] = [
  { name: "HTML", icon: HTML },
  { name: "CSS", icon: CSS },
  { name: "JavaScript", icon: JavaScript },
  { name: "TypeScript", icon: TypeScript },
  { name: "ReactJS", icon: ReactJS },
  { name: "NextJS" },
  { name: "Tailwind CSS", icon: Tailwind },
  { name: "PrimeReact", icon: PrimeReact },
  { name: "PrimeFlex", icon: PrimeFlex },
  { name: "Fluent UI", icon: FluentUI },
];

const internshipTechnologies: Technology[] = [
  { name: "HTML", icon: HTML },
  { name: "CSS", icon: CSS },
  { name: "JavaScript", icon: JavaScript },
  { name: "Bootstrap", icon: Bootstrap },
];

const lexnetixProjects: {
  key: "documentEditor" | "dndAssessment" | "surveyAssessment";
  image: string;
  technologies: Technology[];
}[] = [
  {
    key: "documentEditor",
    image: EJ2,
    technologies: [
      { name: "Syncfusion EJ2" },
      { name: "Fluent UI", icon: FluentUI },
      { name: "Tailwind CSS", icon: Tailwind },
      { name: "ReactJS", icon: ReactJS },
    ],
  },
  {
    key: "dndAssessment",
    image: DnDKit,
    technologies: [
      { name: "DnD Kit" },
      { name: "Fluent UI", icon: FluentUI },
      { name: "Tailwind CSS", icon: Tailwind },
      { name: "ReactJS", icon: ReactJS },
    ],
  },
  {
    key: "surveyAssessment",
    image: SurveyJS,
    technologies: [
      { name: "SurveyJS" },
      { name: "PrimeReact", icon: PrimeReact },
      { name: "PrimeFlex", icon: PrimeFlex },
      { name: "ReactJS", icon: ReactJS },
    ],
  },
];

const Experiences = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      key: "lexnetix",
      title: "LEXNETIX",
      technologies: lexnetixTechnologies,
    },
    {
      key: "bangkok",
      title: t("experience.bangkok.title"),
      technologies: internshipTechnologies,
    },
  ] as const;

  const projects: Project[] = [
    ...lexnetixProjects.map(({ key, ...project }) => ({
      ...project,
      date: t(`experience.${key}.date`),
      title: t(`experience.${key}.title`),
      description: t(`experience.${key}.description`),
      organization: t("experience.lexnetixProject"),
    })),
    {
      title: t("experience.furni.title"),
      description: t("experience.furni.description"),
      image: Furni,
      website: "https://jakkarink.github.io/react-furni-ecom/",
      technologies: [
        { name: "HTML", icon: HTML },
        { name: "CSS", icon: CSS },
        { name: "JavaScript", icon: JavaScript },
        { name: "SCSS" },
        { name: "Bootstrap", icon: Bootstrap },
        { name: "ReactJS", icon: ReactJS },
      ],
    },
    {
      title: t("experience.dashboard.title"),
      description: t("experience.dashboard.description"),
      image: Dashboard,
      website: "https://jakkarink.github.io/react-material-dashboard/",
      technologies: [
        { name: "HTML", icon: HTML },
        { name: "CSS", icon: CSS },
        { name: "JavaScript", icon: JavaScript },
        { name: "SCSS" },
        { name: "MUI" },
        { name: "ReactJS", icon: ReactJS },
      ],
    },
    {
      title: t("experience.coffee.title"),
      description: t("experience.coffee.description"),
      image: Coffee,
      website: "https://jakkarink.github.io/Coffee-Style-Website/",
      technologies: [
        { name: "HTML", icon: HTML },
        { name: "CSS", icon: CSS },
        { name: "JavaScript", icon: JavaScript },
        { name: "SCSS" },
        { name: "ReactJS", icon: ReactJS },
      ],
    },
    {
      title: t("experience.chillaid.title"),
      description: t("experience.chillaid.description"),
      image: Chillaid,
      website: "https://jakkarink.github.io/ChillAid-React/",
      technologies: [
        { name: "HTML", icon: HTML },
        { name: "CSS", icon: CSS },
        { name: "JavaScript", icon: JavaScript },
        { name: "SCSS" },
        { name: "ReactJS", icon: ReactJS },
      ],
    },
  ];

  return (
    <div className="page-container">
      <section className="experience-section">
        <h1 className="divider-title">{t("experience.workTitle")}</h1>
        <div className="work-list">
          {experiences.map(({ key, title, technologies }) => {
            const details =
              key === "lexnetix"
                ? t("experience.lexnetix.details", { returnObjects: true })
                : t("experience.bangkok.details", { returnObjects: true });

            return (
              <article className="work-card" key={key}>
                <h2>{title}</h2>
                <p className="work-date">{t(`experience.${key}.date`)}</p>
                <p>{t(`experience.${key}.role`)}</p>
                <ul className="experience-details">
                  {details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <TechnologyList items={technologies} />
              </article>
            );
          })}
        </div>
      </section>
      <section className="experience-section">
        <h2 className="divider-title">{t("experience.projectsTitle")}</h2>
        <div className="project-grid">
          {projects.map(
            ({
              date,
              title,
              description,
              technologies,
              image,
              website,
              organization,
            }) => {
              const content = (
                <>
                  {image && (
                    <img
                      alt={t("experience.projectPreview", { title })}
                      className="project-image"
                      src={image}
                    />
                  )}
                  <div className="project-details">
                    {date && <p className="work-date">{date}</p>}
                    {organization && (
                      <p className="project-organization">{organization}</p>
                    )}
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <TechnologyList items={technologies} />
                  </div>
                </>
              );

              return website ? (
                <a
                  aria-label={t("experience.openProject", { title })}
                  className="project-card project-card-link"
                  href={website}
                  key={title}
                  rel="noreferrer"
                  target="_blank"
                >
                  {content}
                </a>
              ) : (
                <article className="project-card" key={title}>
                  {content}
                </article>
              );
            },
          )}
        </div>
      </section>
    </div>
  );
};

export default Experiences;
