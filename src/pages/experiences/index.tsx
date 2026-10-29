import Chillaid from "../../assets/img/exp/chillaid.png";
import Coffee from "../../assets/img/exp/coffee-style.png";
import DnDKit from "../../assets/img/exp/DnDKit.png";
import Dashboard from "../../assets/img/exp/mainboard-react.png";
import EJ2 from "../../assets/img/exp/EJ2.png";
import SurveyJS from "../../assets/img/exp/SurveyJS.png";
import Furni from "../../assets/img/exp/furni.png";
import Bootstrap from "../../assets/img/icon/BootStrap5.svg";
import CSS from "../../assets/img/icon/CSS.svg";
import FluentUI from "../../assets/img/icon/fluentui.svg";
import HTML from "../../assets/img/icon/HTML.svg";
import JavaScript from "../../assets/img/icon/JavaScript.svg";
import PrimeFlex from "../../assets/img/icon/primeflex.png";
import PrimeReact from "../../assets/img/icon/primereact.svg";
import ReactJS from "../../assets/img/icon/ReactJS.svg";
import Tailwind from "../../assets/img/icon/tailwind.svg";
import TypeScript from "../../assets/img/icon/typescript.svg";
import type { Technology } from "../../components/TechnologyList";
import TechnologyList from "../../components/TechnologyList";

interface Experience {
  title: string;
  date: string;
  role: string;
  details: string[];
  technologies: Technology[];
}

interface Project {
  date?: string;
  title: string;
  description: string;
  technologies: Technology[];
  image?: string;
  website?: string;
  organization?: string;
}

const ProjectCard = ({
  date,
  title,
  description,
  technologies,
  image,
  website,
  organization,
}: Project) => {
  const content = (
    <>
      {image && (
        <img
          alt={`${title} project preview`}
          className="project-image"
          src={image}
        />
      )}
      <div className="project-details">
        {date && <p className="work-date">{date}</p>}
        {organization && (
          <p className="project-organization">{organization} PROJECT</p>
        )}
        <h3>{title}</h3>
        <p>{description}</p>
        <TechnologyList items={technologies} />
      </div>
    </>
  );

  return website ? (
    <a
      aria-label={`Open ${title} project`}
      className="project-card project-card-link"
      href={website}
      rel="noreferrer"
      target="_blank"
    >
      {content}
    </a>
  ) : (
    <article className="project-card">{content}</article>
  );
};

const experiences: Experience[] = [
  {
    title: "LEXNETIX",
    date: "Jul 2024 - Dec 2026 (2+ Years)",
    role: "Front-end Developer",
    details: [
      "Took on increased project ownership, contributing to technical solutions and project execution for legal and PDPA-related applications.",
      "Planned and coordinated development tasks for a two-person frontend team supporting five features over an eight-month roadmap.",
      "Balanced feature development with bug fixes, technical support, and customer-specific customizations for legal and PDPA workflows.",
      "Collaborated with design, backend, and QA teams to refine UI/UX, align API payloads, and identify potential bugs and testing gaps.",
      "Used structured planning with Claude Code to support code implementation, merge request preparation, and cherry-pick workflows.",
      "Analyzed technical issues and proposed solutions to improve development efficiency, code quality, and project delivery.",
    ],
    technologies: [
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
    ],
  },
  {
    title: "Bangkok Web Solution",
    date: "May 2024 - Jul 2024 (4 Months)",
    role: "Front-end Developer Intern",
    details: [
      "Developed responsive websites with HTML, CSS, and JavaScript.",
      "Learned and applied best practices in front-end development.",
    ],
    technologies: [
      { name: "HTML", icon: HTML },
      { name: "CSS", icon: CSS },
      { name: "JavaScript", icon: JavaScript },
      { name: "Bootstrap", icon: Bootstrap },
    ],
  },
];

const projects: Project[] = [
  {
    title: "Furni Ecommerce (ReactJS)",
    description:
      "Ecommerce website template for learning and practicing Bootstrap 5.",
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
    title: "Dashboard Material (ReactJS)",
    description:
      "Dashboard template used to learn and practice the MUI framework.",
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
    title: "CoffeeStyle",
    description:
      "Coffee shop website template inspired by Webflow, built for learning and practice.",
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
    title: "ChillAid",
    description: "Blog website template created for learning and practice.",
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

const lexnetixProjects: Project[] = [
  {
    date: "Aug 2025 - Nov 2025",
    title: "Document Editor",
    description: "Developed UI components for a document editor system.",
    image: EJ2,
    organization: "LEXNETIX",
    technologies: [
      { name: "Syncfusion EJ2" },
      { name: "Fluent UI", icon: FluentUI },
      { name: "Tailwind CSS", icon: Tailwind },
      { name: "ReactJS", icon: ReactJS },
    ],
  },
  {
    date: "Jun 2025 - Apr 2025",
    title: "Creator Assessment (DnD Kit)",
    description: "Developed drag-and-drop UI components and reusable kits.",
    image: DnDKit,
    organization: "LEXNETIX",
    technologies: [
      { name: "DnD Kit" },
      { name: "Fluent UI", icon: FluentUI },
      { name: "Tailwind CSS", icon: Tailwind },
      { name: "ReactJS", icon: ReactJS },
    ],
  },
  {
    date: "Oct 2024 - Feb 2025",
    title: "Creator Assessment (SurveyJS)",
    description: "Developed a survey builder and dynamic form system.",
    image: SurveyJS,
    organization: "LEXNETIX",
    technologies: [
      { name: "SurveyJS" },
      { name: "PrimeReact", icon: PrimeReact },
      { name: "PrimeFlex", icon: PrimeFlex },
      { name: "ReactJS", icon: ReactJS },
    ],
  },
];

const Experiences = () => (
  <div className="page-container">
    <section className="experience-section">
      <h1 className="divider-title">WORK EXPERIENCES</h1>
      <div className="work-list">
        {experiences.map(({ title, date, role, details, technologies }) => (
          <article className="work-card" key={title}>
            <h2>{title}</h2>
            <p className="work-date">{date}</p>
            <p>{role}</p>
            <ul className="experience-details">
              {details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <TechnologyList items={technologies} />
          </article>
        ))}
      </div>
    </section>
    <section className="experience-section">
      <h2 className="divider-title">PROJECTS</h2>
      <div className="project-grid">
        {[...lexnetixProjects, ...projects].map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  </div>
);

export default Experiences;
