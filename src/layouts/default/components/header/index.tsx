import { useState } from "react";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";

const navigation = [
  { to: "/", label: "navigation.profile", end: true },
  { to: "/skills", label: "navigation.skills" },
  { to: "/experiences", label: "navigation.experiences" },
  { to: "/educations", label: "navigation.educations" },
  { to: "/socials", label: "navigation.socials" },
] as const;

const LayoutHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink className="site-title" to="/">
          PORTFOLIO
        </NavLink>
        <nav
          aria-label={t("navigation.main")}
          className={`site-navigation${menuOpen ? " is-open" : ""}`}
        >
          {navigation.map(({ to, label }) => (
            <NavLink
              end={to === "/"}
              key={label}
              onClick={() => setMenuOpen(false)}
              to={to}
            >
              {t(label)}
            </NavLink>
          ))}
        </nav>
        <div aria-label={t("language.label")} className="language-switch">
          <button
            aria-pressed={i18n.resolvedLanguage === "en"}
            onClick={() => void i18n.changeLanguage("en")}
            type="button"
          >
            EN
          </button>
          <button
            aria-pressed={i18n.resolvedLanguage === "th"}
            onClick={() => void i18n.changeLanguage("th")}
            type="button"
          >
            TH
          </button>
        </div>
        <button
          aria-expanded={menuOpen}
          aria-label={t(menuOpen ? "navigation.closeMenu" : "navigation.openMenu")}
          className="menu-toggle"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default LayoutHeader;
