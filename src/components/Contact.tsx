import EmailIcon from "../assets/img/icon/gmail-icon.svg";
import LinkedInIcon from "../assets/img/icon/linkedin-icon.svg";

const Contact = () => (
  <section aria-labelledby="contact-title" className="contact-block">
    <h2 id="contact-title">CONTACTS</h2>
    <p>
      <img alt="" className="contact-brand-icon" src={EmailIcon} />
      <a href="mailto:earth1277@gmail.com">earth1277@gmail.com</a>
    </p>
    <p>
      Tel: <a href="tel:+66985554214">098-555-4214</a>
    </p>
    <p>
      <img alt="" className="contact-brand-icon" src={LinkedInIcon} />
      <a href="https://www.linkedin.com/in/JakkarinK" rel="noreferrer" target="_blank">
        linkedin.com/in/JakkarinK
      </a>
    </p>
  </section>
);

export default Contact;
