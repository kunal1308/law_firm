import React from "react";
import ellipse from '../../../assets/Group 19.png';
// import Gift from "../../assets/gift.png";
import styles from "./Card.module.css";

const Card = ({ successRate }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imageWrapper}>
        <img src={ellipse} alt="ellipse" className={styles.ellipse} />
      </div>
      <div className={styles.cardHeading}>{successRate}</div>
      <p className={styles.cardText}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer.
      </p>
      <button className={styles.cardBtn}>Read More</button>
    </div>
  );
};

export default Card;