import TU from "../../assets/img/campus/tu.png";
import SKR from "../../assets/img/campus/skr.png";

const education = [
  {
    cover: TU,
    title: "Thammasat University (Bachelor's degree)",
    date: "2020 - 2024",
    program: "Bachelor's degree in Software Engineering",
    location: "Pathum Thani, Thailand",
  },
  {
    cover: SKR,
    title: "Suankularb Witayalai Rangsit",
    date: "2014 - 2020",
    program: "Science and Mathematics",
    location: "Pathum Thani, 12120",
  },
];

const Educations = () => (
  <div className="page-container">
    <h1 className="section-title">Education</h1>
    <div className="education-grid">
      {education.map(({ cover, title, date, program, location }) => (
        <article className="education-card" key={title}>
          <img alt={`${title} logo`} src={cover} />
          <div>
            <h3>{title}</h3>
            <p className="education-date">{date}</p>
            <p>{program}</p>
            <p>{location}</p>
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default Educations;
