import React, { useState } from "react";
import { IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import logo from "../assets/logo4.svg";
import styles from "../css/Header.module.css";
import "animate.css";

const NAV_LINKS = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  // { href: "#initiatives", label: "Initiatives" },
  // { href: "#events", label: "Events" },
  // { href: "#faq", label: "FAQ" },
  { href: "#team", label: "Team" },
  { href: "#footer", label: "Contact" },
];

const SOCIAL_LINKS = [
  {
    icon: instagram,
    href: "https://www.instagram.com/direct/t/112983180098382/",
    label: "Instagram",
  },
  {
    icon: linkedin,
    href: "https://www.linkedin.com/in/neev-shah-3a3a262a8/?originalSubdomain=ca",
    label: "LinkedIn",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`${styles.header} animate__animated animate__fadeIn`}>
      <a
        href="#"
        className={`${styles.logo} animate__animated animate__bounceInLeft`}
      >
        <img src={logo} className={styles.link} alt="Logo" />
      </a>

      <nav className={`${styles.navContainer} ${styles.desktopNavLinks}`}>
        <ul className={styles.navLinks}>
          {NAV_LINKS.map((nav_link, index) => (
            <li
              key={nav_link.label}
              className="animate__animated animate__fadeInDown"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a href={nav_link.href} className={styles.link}>
                {nav_link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.rightSection}>
        <div
          className={`${styles.socialLinksContainer} ${styles.desktopSocialLinks}`}
        >
          {SOCIAL_LINKS.map((social_link, index) => (
            <a
              key={social_link.label}
              href={social_link.href}
              className={styles.socialLink}
            >
              <img
                src={social_link.icon}
                alt={social_link.label}
                className={`${styles.link} ${styles.socialImage}`}
              />
            </a>
          ))}
        </div>

        <div className={styles.mobileMenuToggle}>
          <IconButton onClick={toggleMenu} color="inherit" aria-label="menu">
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
      </div>

      <Drawer
        anchor="right"
        open={isOpen}
        onClose={toggleMenu}
        classes={{
          paper: styles.drawerPaper,
        }}
      >
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileNavLinks}>
            {NAV_LINKS.map((nav_link) => (
              <li key={nav_link.label} className={styles.mobileLinkItem}>
                <a
                  href={nav_link.href}
                  className={styles.link}
                  onClick={toggleMenu}
                >
                  {nav_link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.mobileSocialLinks}>
            {SOCIAL_LINKS.map((social_link) => (
              <a
                key={social_link.label}
                href={social_link.href}
                className={styles.mobileSocialLink}
              >
                <img
                  src={social_link.icon}
                  alt={social_link.label}
                  className={`${styles.link} ${styles.socialImage}`}
                />
              </a>
            ))}
          </div>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
