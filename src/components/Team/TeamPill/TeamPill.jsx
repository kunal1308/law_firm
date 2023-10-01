import React from "react";
import styles from "./TeamPill.module.css";

const TeamPil = ({ person, name, cases }) => {
  return (
    <div className={styles.wrapper}>
      <img src={person} alt={name} className={styles.image} />
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.cases}>{cases}</span>
      </div>
    </div>
  );
};

export default TeamPil;