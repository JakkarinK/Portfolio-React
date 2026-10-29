import type { Technology } from "../../components/technologyList";
import TechnologyList from "../../components/technologyList";

import Bootstrap from "../../assets/images/icons/bootstrap5.svg";
import Claude from "../../assets/images/icons/claude.svg";
import CSS from "../../assets/images/icons/css.svg";
import DnDKit from "../../assets/images/icons/dndKit.svg";
import FluentUI from "../../assets/images/icons/fluentui.svg";
import Git from "../../assets/images/icons/git.svg";
import GitLab from "../../assets/images/icons/gitLab.svg";
import HTML from "../../assets/images/icons/html.svg";
import JavaScript from "../../assets/images/icons/javascript.svg";
import NextJS from "../../assets/images/icons/nextJs.svg";
import PrimeFlex from "../../assets/images/icons/primeFlex.png";
import PrimeReact from "../../assets/images/icons/primereact.svg";
import ReactJS from "../../assets/images/icons/reactJs.svg";
import SCSS from "../../assets/images/icons/scss.svg";
import SourceTree from "../../assets/images/icons/sourceTree.svg";
import SurveyJS from "../../assets/images/icons/surveyJs.svg";
import Syncfusion from "../../assets/images/icons/syncfusion.svg";
import Tailwind from "../../assets/images/icons/tailwind.svg";
import TypeScript from "../../assets/images/icons/typescript.svg";
import { useTranslation } from "react-i18next";

const skillGroups = [
  {
    title: "skills.groups.web",
    items: [
      { name: "HTML5", icon: HTML },
      { name: "CSS3", icon: CSS },
      { name: "SCSS", icon: SCSS },
    ],
  },
  {
    title: "skills.groups.tools",
    items: [
      { name: "Git", icon: Git },
      { name: "GitLab", icon: GitLab },
      { name: "SourceTree", icon: SourceTree },
      { name: "Claude Code", icon: Claude },
    ],
  },
  {
    title: "skills.groups.languages",
    items: [
      { name: "JavaScript (ES6+)", icon: JavaScript },
      { name: "TypeScript", icon: TypeScript },
    ],
  },
  {
    title: "skills.groups.other",
    items: [
      { name: "SurveyJS", icon: SurveyJS },
      { name: "Syncfusion EJ2", icon: Syncfusion },
    ],
  },
  {
    title: "skills.groups.frameworks",
    items: [
      { name: "ReactJS", icon: ReactJS },
      { name: "NextJS", icon: NextJS },
      { name: "Tailwind CSS", icon: Tailwind },
      { name: "PrimeReact", icon: PrimeReact },
      { name: "PrimeFlex", icon: PrimeFlex },
      { name: "Bootstrap", icon: Bootstrap },
      { name: "Fluent UI", icon: FluentUI },
      { name: "DnD Kit", icon: DnDKit },
    ],
  },
] as const satisfies { title: string; items: Technology[] }[];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      {skillGroups.map(({ title, items }) => (
        <section className="skill-group" key={title}>
          <h1 className="section-title">{t(title)}</h1>
          <TechnologyList items={items} />
        </section>
      ))}
    </div>
  );
};
export default Skills;
