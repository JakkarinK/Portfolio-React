import Contact from "../../components/Contact";
import ProfileCarousel from "../../components/ProfileCarousel";
import ResumeDownloads from "../../components/ResumeDownloads";

const strengths = [
  "Problem Solving & Analytical Thinking",
  "Project Planning & Time Management",
  "Cross-functional Collaboration",
  "Adaptability & Fast Learner",
  "Attention to Detail & Code Quality",
  "Using AI to Improve Productivity",
];

const Homepage = () => (
  <div className="page-container">
    <div className="profile-carousel-section">
      <ProfileCarousel />
    </div>
    <div className="profile-intro">
      <p className="profile-name">Hello, my name is Jakkarin Kerdthaidee.</p>
      <p>You can call me Earth.</p>
      <p>Front-end Developer with 2+ years of experience in ReactJS and NextJS.</p>
      <p>
        Experienced in project coordination, technical problem-solving, and
        cross-functional collaboration.
      </p>
      <p>
        Currently contributing to legal and PDPA-related applications at
        Lexnetix.
      </p>
    </div>
    <section aria-labelledby="strengths-title" className="profile-strengths">
      <h2 className="section-title" id="strengths-title">
        Strengths
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

export default Homepage;
