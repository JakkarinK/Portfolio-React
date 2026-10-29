import EmailIcon from "../assets/images/icons/gmailIcon.svg";
import LinkedInIcon from "../assets/images/icons/linkedInIcon.svg";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="contact-title" className="contact-block">
      <h2 id="contact-title">{t("contact.title")}</h2>
      <p>
        <img alt="" className="contact-brand-icon" src={EmailIcon} />
        <span>{t("contact.email")}:</span>
        <a href="mailto:earth1277@gmail.com">earth1277@gmail.com</a>
      </p>
      <p>
        {t("contact.phone")}: <a href="tel:+66985554214">098-555-4214</a>
      </p>
      <p>
        <img alt="" className="contact-brand-icon" src={LinkedInIcon} />
        <span>{t("contact.linkedin")}:</span>
        <a href="https://www.linkedin.com/in/JakkarinK" rel="noreferrer" target="_blank">
          linkedin.com/in/JakkarinK
        </a>
      </p>
    </section>
  );
};

export default Contact;
