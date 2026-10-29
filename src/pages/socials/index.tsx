import Contact from "../../components/Contact";
import EmailIcon from "../../assets/img/icon/gmail-icon.svg";
import LinkedInIcon from "../../assets/img/icon/linkedin-icon.svg";
import { useTranslation } from "react-i18next";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/JakkarinK",
    translationKey: "socials.linkedin",
    icon: LinkedInIcon,
  },
  {
    href: "mailto:earth1277@gmail.com",
    translationKey: "socials.email",
    icon: EmailIcon,
  },
] as const;

const Socials = () => {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <div className="social-grid">
        {socialLinks.map(({ href, translationKey, icon }) => {
          const label = t(translationKey);

          return (
            <a
              aria-label={label}
              className="social-card"
              href={href}
              key={translationKey}
              rel="noreferrer"
              target={translationKey === "socials.email" ? undefined : "_blank"}
            >
              <img alt="" src={icon} />
              {label}
            </a>
          );
        })}
      </div>
      <Contact />
    </div>
  );
};

export default Socials;
