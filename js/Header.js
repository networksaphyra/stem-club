import React from "react";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import logo from "../assets/logo4.svg";
import styles from "../css/Header.module.css";
import "animate.css";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#initiatives", label: "Initiatives" },
  { href: "#events", label: "Events" },
  { href: "#faq", label: "FAQ" },
  { href: "#team", label: "Team" },
];

const SOCIAL_LINKS = [
  { icon: instagram, href: "https://www.instagram.com", label: "Instagram" },
  { icon: linkedin, href: "https://www.instagram.com", label: "Instagram" },
];

const Header = () => {
  return (
    <header className={`${styles.header} animate__animated animate__fadeIn`}>
      <a
        href="#"
        alt="Logo"
        className={`${styles.logo} animate__animated animate__bounceInLeft`}
      >
        <img src={logo} className={styles.link} />
      </a>
      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          {NAV_LINKS.map((nav_link, index) => (
            <li
              key={nav_link.label}
              className="animate__animated animate__fadeInDown"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a
                href={nav_link.href}
                alt={nav_link.label}
                className={styles.link}
              >
                {nav_link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <nav className={`${styles.nav} ${styles.socialLinks}`}>
        <ul className={`${styles.navLinks} ${styles.socialLinks}`}>
          {SOCIAL_LINKS.map((social_link, index) => (
            <li
              key={social_link.label}
              className="animate__animated animate__bounceInRight"
              style={{ animationDelay: `${(index + 0.5) * 0.1}s` }}
            >
              <a href={social_link.href}>
                <img
                  src={social_link.icon}
                  alt={social_link.label}
                  className={`${styles.link} ${styles.social_image}`}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
