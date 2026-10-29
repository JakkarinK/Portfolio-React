import type { Technology } from "../../components/TechnologyList";
import TechnologyList from "../../components/TechnologyList";

import Bootstrap from "../../assets/img/icon/BootStrap5.svg";
import Claude from "../../assets/img/icon/Claude.svg";
import CSS from "../../assets/img/icon/CSS.svg";
import DnDKit from "../../assets/img/icon/DnDKit.svg";
import FluentUI from "../../assets/img/icon/fluentui.svg";
import Git from "../../assets/img/icon/Git.svg";
import GitLab from "../../assets/img/icon/GitLab.svg";
import HTML from "../../assets/img/icon/HTML.svg";
import JavaScript from "../../assets/img/icon/JavaScript.svg";
import NextJS from "../../assets/img/icon/NextJS.svg";
import PrimeFlex from "../../assets/img/icon/primeflex.png";
import PrimeReact from "../../assets/img/icon/primereact.svg";
import ReactJS from "../../assets/img/icon/ReactJS.svg";
import SCSS from "../../assets/img/icon/SCSS.svg";
import SourceTree from "../../assets/img/icon/SourceTree.svg";
import SurveyJS from "../../assets/img/icon/SurveyJS.svg";
import Syncfusion from "../../assets/img/icon/Syncfusion.svg";
import Tailwind from "../../assets/img/icon/Taiwind.svg";
import TypeScript from "../../assets/img/icon/typescript.svg";
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
