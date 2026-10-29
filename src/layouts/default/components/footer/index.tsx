import ResumeDownloads from "../../../../components/resumeDownloads";
import { socialLinks } from "../../../../data/socialLinks";
import { useTranslation } from "react-i18next";

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
          {socialLinks.map(({ href, translationKey, icon, opensInNewTab }) => {
            const label = t(translationKey);

            return (
            <a
              aria-label={label}
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
        </nav>
      </div>
    </footer>
  );
};

export default LayoutFooter;
