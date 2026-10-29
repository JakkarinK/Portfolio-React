import Contact from "../../components/contact";
import { socialLinks } from "../../data/socialLinks";
import { useTranslation } from "react-i18next";

const Socials = () => {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <div className="social-grid">
        {socialLinks.map(({ href, translationKey, icon, opensInNewTab }) => {
          const label = t(translationKey);

          return (
            <a
              aria-label={label}
              className="social-card"
              href={href}
              key={translationKey}
              rel="noreferrer"
              target={opensInNewTab ? "_blank" : undefined}
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
