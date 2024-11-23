import React, { useEffect } from "react";
import styles from "../css/Content.module.css";
import "animate.css";

const FEATURE_ITEMS = [
  {
    title: "Who We Are",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor arcu at libero venenatis egestas. Praesent ut ligula a dui eleifend dapibus. Sed tincidunt volutpat odio, quis pellentesque erat interdum. ",
    icon: "👥",
  },
  {
    title: "Our Mission",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor arcu at libero venenatis egestas. Praesent ut ligula a dui eleifend dapibus. Sed tincidunt volutpat odio, quis pellentesque erat interdum. ",
    icon: "🎯",
  },
  {
    title: "Where We're Based",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor arcu at libero venenatis egestas. Praesent ut ligula a dui eleifend dapibus. Sed tincidunt volutpat odio, quis pellentesque erat interdum. ",
    icon: "📍",
  },
];

const Content = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "animate__animated",
              entry.target.dataset.animation,
            );
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    // Observe header
    const header = document.querySelector(`.${styles.sectionHeader}`);
    if (header) {
      header.classList.add(
        "animate__animated",
        "animate__fadeIn",
        "animate__delay-0.2s",
      );
      observer.observe(header);
    }

    const cards = document.querySelectorAll(`.${styles.featureCard}`);
    cards.forEach((card, index) => {
      card.dataset.animation = "animate__fadeInUp";
      card.style.opacity = "0";
      card.style.animationDelay = `${index * 0.2}s`;
      observer.observe(card);
    });

    const callout = document.querySelector(`.${styles.calloutSection}`);
    if (callout) {
      callout.dataset.animation = "animate__fadeIn";
      callout.style.opacity = "0";
      observer.observe(callout);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.contentContainer} id="about">
      <div className={styles.contentWrapper}>
        <div className={styles.sectionHeader} style={{ opacity: 0 }}>
          <h2 className={styles.sectionTitle}>About Us</h2>
          <p className={styles.sectionSubtitle}>
            Building a community of innovation and excellence in STEM
          </p>
        </div>

        <div className={styles.featureGrid}>
          {FEATURE_ITEMS.map((item, index) => (
            <div key={item.title} className={styles.featureCard}>
              <div className={styles.iconContainer}>
                <span className={styles.icon}>{item.icon}</span>
              </div>
              <h3 className={styles.featureTitle}>{item.title}</h3>
              <p className={styles.featureDescription}>{item.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.calloutSection} style={{ opacity: 0 }}>
          <div className={styles.calloutContent}>
            <h3 className={styles.calloutTitle}>Join Our Community</h3>
            <p className={styles.calloutText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque auctor arcu at libero venenatis egestas. Praesent ut
              ligula a dui eleifend dapibus. Sed tincidunt volutpat odio, quis
              pellentesque erat interdum.
            </p>
            <button className={styles.calloutButton}>Get Started Today</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
