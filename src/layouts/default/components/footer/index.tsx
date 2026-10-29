import ResumeDownloads from "../../../../components/ResumeDownloads";
import EmailIcon from "../../../../assets/img/icon/gmail-icon.svg";
import LinkedInIcon from "../../../../assets/img/icon/linkedin-icon.svg";
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

const LayoutFooter = () => {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-contact">
          <ResumeDownloads />
          <a href="tel:+66985554214">098-555-4214</a>
        </div>
        <nav aria-label={t("socials.links")} className="footer-socials">
          {socialLinks.map(({ href, translationKey, icon }) => {
            const label = t(translationKey);

            return (
            <a
              aria-label={label}
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
        </nav>
      </div>
    </footer>
  );
};

export default LayoutFooter;
