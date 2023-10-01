import React from "react";
import styles from "./ClientsCard.module.css";

const ClientsCard = ({ person, name }) => {
  return (
    <div className={styles.cardWrapper}>
      <img src={person} alt="gift" className={styles.person} />
      <div className={styles.cardHeading}>{name}</div>
      <div className={styles.designation}>CEO of Hunt</div>
      <p className={styles.cardText}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua
        dolor do amet sint. Velit officia
      </p>
    </div>
  );
};

export default ClientsCard;