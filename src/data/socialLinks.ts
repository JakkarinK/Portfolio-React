import EmailIcon from "../assets/images/icons/gmailIcon.svg";
import LinkedInIcon from "../assets/images/icons/linkedInIcon.svg";

export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/JakkarinK",
    translationKey: "socials.linkedin",
    icon: LinkedInIcon,
    opensInNewTab: true,
  },
  {
    href: "mailto:earth1277@gmail.com",
    translationKey: "socials.email",
    icon: EmailIcon,
    opensInNewTab: false,
  },
] as const;
