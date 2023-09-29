import React from "react";
import logo1 from '../../assets/Vector.png';
import logo2 from "../../assets/Igstudio.png";
import styles from "./Logo.module.css";
const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo1} alt="logo1" className={styles.logo1} />
      <img src={logo2} alt="logo2" className={styles.logo2} />
    </div>
  );
};

export default Logo;