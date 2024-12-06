import React from "react";
import styles from "../css/Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.contactInfo}>
          <h4>Contact Us</h4>
          <p>
            Email:{" "}
            <a href="mailto:its2amrnandigotschooltmrw@gmail.com">something</a>
          </p>
          <p>
            Instagram: <a href="https://www.instagram.com">@CHCI STEM</a>
          </p>
        </div>
        <div className={styles.copyright}>
          React 💻 and coffee ☕️ and procrastination 🔥{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
