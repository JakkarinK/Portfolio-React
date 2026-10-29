import Contact from "../../components/Contact";
import EmailIcon from "../../assets/img/icon/gmail-icon.svg";
import LinkedInIcon from "../../assets/img/icon/linkedin-icon.svg";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/JakkarinK",
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
  {
    href: "mailto:earth1277@gmail.com",
    label: "Email",
    icon: EmailIcon,
  },
];

const Socials = () => (
  <div className="page-container">
    <div className="social-grid">
      {socialLinks.map(({ href, label, icon }) => (
        <a
          aria-label={label}
          className="social-card"
          href={href}
          key={label}
          rel="noreferrer"
          target={label === "Email" ? undefined : "_blank"}
        >
          <img alt="" src={icon} />
          {label}
        </a>
      ))}
    </div>
    <Contact />
  </div>
);

export default Socials;
