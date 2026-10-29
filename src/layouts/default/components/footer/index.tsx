import ResumeDownloads from "../../../../components/ResumeDownloads";
import EmailIcon from "../../../../assets/img/icon/gmail-icon.svg";
import LinkedInIcon from "../../../../assets/img/icon/linkedin-icon.svg";

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

const LayoutFooter = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-contact">
          <ResumeDownloads />
          <a href="tel:+66985554214">098-555-4214</a>
        </div>
        <nav aria-label="Social links" className="footer-socials">
          {socialLinks.map(({ href, label, icon }) => (
            <a
              aria-label={label}
              href={href}
              key={label}
              rel="noreferrer"
              target={label === "Email" ? undefined : "_blank"}
            >
              <img alt="" src={icon} />
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default LayoutFooter;
