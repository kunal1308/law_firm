import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../NavBar/Navigation/Navigation";
import facebook from "../../assets/Icon (3).png";
import instagram from "../../assets/Icon.png";
import pintrest from "../../assets/Icon (2).png";
import twitter from "../../assets/Icon (1).png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navigate}>
        <Logo />
        <Navigation />
        <div className={styles.socialMedia}>
          <a href="/"><img src={instagram} alt="instagram" /></a>
          <a href="/"><img src={facebook} alt="facebook" /></a>
          <a href="/"><img src={twitter} alt="twitter" /></a>
          <a href="/"><img src={pintrest} alt="pintrest" /></a>
        </div>
      </div>
      <div className={styles.policy}>
        <div className={styles.policyText}>
          © 2020 Acme. All right reserved.
        </div>
        <div className={styles.policyText}>Privacy Policy</div>
        <div className={styles.policyText}>Terms of Service</div>
      </div>
    </div>
  );
};

export default Footer;