import React, { useEffect } from "react";
import styles from "../css/Content.module.css";
import "animate.css";

const FEATURE_ITEMS = [
  {
    title: "Who We Are",
    description:
      "We are a passionate group of students dedicated to exploring and advancing the fields of Science, Technology, Engineering, and Mathematics (STEM). Our club brings together curious minds from diverse backgrounds to collaborate, innovate, and solve real-world problems.",
    icon: "👥",
  },
  {
    title: "Our Mission",
    description:
      "Our mission is to empower and inspire the next generation of innovators and problem-solvers by fostering a passion for STEM. We aim to create a supportive and inclusive environment where students can develop critical skills, work on meaningful projects, and explore the endless possibilities within STEM.",
    icon: "🎯",
  },
  {
    title: "Where We're Based",
    description:
      "We are based at Cameron Heights Collegiate Institute in Kitchener, Ontario. Our school provides the perfect environment for students to come together, share ideas, and explore their passions for STEM.",
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
            <h3 className={styles.calloutTitle} id="community">
              Join Our Community
            </h3>
            <p className={styles.calloutText}>
              Become part of a collaborative network where curiosity thrives,
              ideas flourish, and together we shape the future of STEM.
            </p>
            <button className={styles.calloutButton}>Join</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
