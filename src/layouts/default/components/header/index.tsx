import { useState } from "react";
import { NavLink } from "react-router";

const navigation = [
  { to: "/", label: "Profile", end: true },
  { to: "/skills", label: "Skills" },
  { to: "/experiences", label: "Experiences" },
  { to: "/educations", label: "Educations" },
  { to: "/socials", label: "Socials" },
];

const LayoutHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink className="site-title" to="/">
          PORTFOLIO
        </NavLink>
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="menu-toggle"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          aria-label="Main navigation"
          className={`site-navigation${menuOpen ? " is-open" : ""}`}
        >
          {navigation.map(({ to, label, end }) => (
            <NavLink
              end={end}
              key={label}
              onClick={() => setMenuOpen(false)}
              to={to}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default LayoutHeader;
