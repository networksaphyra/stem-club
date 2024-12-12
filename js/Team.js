import React, { useEffect, useRef } from "react";
import styles from "../css/Team.module.css";
import neev from "../assets/neev.jpg";
// import vedant from "../assets/vedant.jpg";
import "animate.css";

const TEAM_MEMBERS = [
  {
    name: "Neev",
    title: "Co-Founder",
    description: "Chief Neev",
    emoji: neev,
    socials: [
      [
        "LinkedIn",
        "https://www.linkedin.com/in/neev-shah-3a3a262a8/?original_referer=&originalSubdomain=ca",
      ],
    ],
  },
  {
    name: "Vedant",
    title: "Co-Founder",
    description: "The Immigrant",
    emoji: "hi",
    socials: [["LinkedIn", "https://github.com/networksaphyra"]],
  },
];

const Team = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
            } else {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.teamSection} id="team">
      <div className={styles.teamWrapper}>
        <div
          ref={sectionRef}
          className={styles.teamHeader}
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <h2 className={styles.teamTitle}>Meet Our Team</h2>
          <p className={styles.teamSubtitle}>
            Passionate individuals working to make STEM Club a success
          </p>
        </div>
        <div className={styles.teamGrid}>
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={member.name}
              ref={(el) => (cardsRef.current[index] = el)}
              className={styles.teamCard}
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: `opacity 0.6s ease-out ${index * 0.2}s, transform 0.6s ease-out ${index * 0.2}s`,
              }}
            >
              <div className={styles.memberEmoji}>
                <img
                  src={member.emoji}
                  alt={`${member.name} profile`}
                  className={styles.memberImage}
                />
              </div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <span className={styles.memberTitle}>{member.title}</span>
                <p className={styles.memberDescription}>{member.description}</p>
                <div className={styles.memberSocial}>
                  {member.socials.map((social) => (
                    <a
                      href={social[1]}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={social[0]}
                    >
                      <button className={styles.socialButton}>
                        {social[0]}
                      </button>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
