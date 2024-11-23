import React from "react";
import styles from "../css/Team.module.css";

const TEAM_MEMBERS = [
  {
    name: "Neev",
    title: "Co-Founder",
    description: "Chief Neev",
    emoji: "👨‍🔬",
    socials: [["Instagram", "https://github.com/networksaphyra"]],
  },
  {
    name: "Vedant",
    title: "Co-Founder",
    description: "The Immigrant",
    emoji: "👨‍🔬",
    socials: [["Instagram", "https://github.com/networksaphyra"]],
  },
  {
    name: "MEEEEEEEEE",
    title: "Developer",
    description: "Cagnus Marlsen",
    emoji: "👨🏻‍💻",
    socials: [["Github", "https://github.com/networksaphyra"]],
  },
];

const Team = () => {
  return (
    <section className={styles.teamSection} id="team">
      <div className={styles.teamWrapper}>
        <div className={styles.teamHeader}>
          <h2 className={styles.teamTitle}>Meet Our Team</h2>
          <p className={styles.teamSubtitle}>
            Passionate individuals working to make STEM Club a success
          </p>
        </div>

        <div className={styles.teamGrid}>
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={member.name}
              className={styles.teamCard}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.memberEmoji}>{member.emoji}</div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <span className={styles.memberTitle}>{member.title}</span>
                <p className={styles.memberDescription}>{member.description}</p>
                <div className={styles.memberSocial}>
                  {member.socials.map((social, index) => (
                    <a href={social[1]} target="_blank">
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
