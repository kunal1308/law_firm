import React from "react";
import styles from './Introduction.module.css';

const Introduction = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.introTxt}>Let’s Introduce Ourself</div>
      <div className={styles.line}></div>
      <div className={styles.contentWrapper}>
        <div className={styles.lawyerHead}>Criminal Lawyer</div>
        <p className={styles.lawyerTxt}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
};

export default Introduction;