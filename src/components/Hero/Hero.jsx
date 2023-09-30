import React from "react";
import styles from "./Hero.module.css";
import messageIcon from "../../assets/Message 35.png";
import heroImage from "../../assets/heroImage.png";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftHero}>
        <div className={styles.herosubHeading}>
          You don’t have to Fight them Alone.
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </p>

        <div className={styles.btn}>
          <div className={styles.btnLeft}>
            <img src={messageIcon} className={styles.icon} alt="msgIcon" />
            <div className={styles.btnText}>Enter your email address</div>
          </div>
          <button className={styles.heroBtn}>Let’s Talk</button>
        </div>
      </div>
      <div>
        <img src={heroImage} alt="hero" className={styles.heroImage} />
      </div>
    </div>
  );
};

export default Hero;