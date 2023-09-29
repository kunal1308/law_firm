import React from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <div>
        <ul className={styles.wrapper}>
            <li><button className={styles.btn}>Home</button></li>
            <li><button className={styles.btn}>Attorneys</button></li>
            <li><button className={styles.btn}>Practice Areas</button></li>
            <li><button className={styles.btn}>About Us</button></li>
        </ul>
    </div>
  )
}

export default Navigation