import React from "react";
import styles from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Subscribe Our Newsletter</div>
      <div className={styles.formSection}>
        <div className={styles.formfield}>
            <span className={styles.category}>Name:</span>
          <input className={styles.formText} placeholder="Enter your name"/>
        </div>
        <div className={styles.formfield1}>
            <span className={styles.category}>Email:</span>
          <input className={styles.formText} placeholder="Enter your email" />
        </div>
          <button className={styles.btnText}>SEND</button>
      </div>
    </div>
  );
};

export default Subscribe;