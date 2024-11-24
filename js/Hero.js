import React from "react";
import styles from "../css/Hero.module.css";
import logo from "../assets/logo4.svg";
import "animate.css";

const CARD_INFO = [
  { id: 1, number: "100+", card_description: "Active Members" },
  { id: 2, number: "100+", card_description: "Projects" },
  { id: 3, number: "100+", card_description: "Events" },
];

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Innovate Through STEM</h1>
        <p className={styles.subtitle}>
          Discover, learn, and create with like-minded peers.
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.primaryButton}>Join Us</button>
          <button className={styles.secondaryButton}>Learn More</button>
        </div>
        <div className={styles.cardContainer}>
          {CARD_INFO.map((card) => (
            <div key={card.id} className={styles.statCard}>
              <div className={styles.statNumber}>{card.number}</div>
              <div className={styles.statName}>{card.card_description}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.heroImage}>
        <img src={logo} alt="STEM Club Logo" />
      </div>
    </section>
  );
};

export default Hero;
