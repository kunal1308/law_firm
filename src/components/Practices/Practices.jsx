import React from "react";
import styles from "./Practices.module.css";
import business from "../../assets/Rectangle 3652.png";
import partnership from "../../assets/Rectangle 3651.png";
import business1 from "../../assets/Rectangle 3654.png";
import elder from "../../assets/Rectangle 3655.png";
import landlord from "../../assets/Rectangle 3656.png";
import realEstate from "../../assets/Rectangle 3653.png";
const Practices = () => {
  return (
    <div className={styles.practiceWrapper}>
      <div className={styles.practiceHeading}>Area of Practices</div>
      <div className={styles.imageWrapper}>
        <div className={`${styles.image} ${styles.image1}`} >
          <img src={business} alt="business" style={{width:"95%",height:"110%"}} />
          <span className={styles.imageText}>BUSINESS LAW</span>
        </div>
        <div className={`${styles.image} ${styles.image2}`}>
          <img src={partnership} alt="partnership" style={{width:"95%",height:"auto"}}/>
          <span className={styles.imageText}>Partnership LAW</span>
        </div>

        <div className={`${styles.image} ${styles.image2}`}>
          <img src={realEstate} alt="business" style={{width:"95%",height:"auto"}}/>
          <span className={styles.imageText}>REAL ESTATE LAW</span>
        </div>
        <div className={`${styles.image} ${styles.image1}`}>
          <img src={business1} alt="business" style={{width:"95%",height:"110%"}} />
          <span className={styles.imageText}>BUSINESS LAW</span>
        </div>
        <div className={`${styles.image} ${styles.image1}`}>
          <img src={landlord} alt="business"style={{width:"95%",height:"110%"}} />
          <span className={styles.imageText}>LANDLORD DISPUTES</span>
        </div>
        <div className={`${styles.image} ${styles.image2}`}>
          <img src={elder} alt="business"style={{width:"95%",height:"auto"}}/>
          <span className={styles.imageText}>ELDER ABUSE</span>
        </div>
      </div>
    </div>
  );
};

export default Practices;