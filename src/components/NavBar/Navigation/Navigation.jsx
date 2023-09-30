import React from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <div>
        <ul className={styles.wrapper}>
            <li><a href="/">Home</a></li>
            <li><a href="/">Attorneys</a></li>
            <li><a href="/">Practice Areas</a></li>
            <li><a href="/">About Us</a></li>
        </ul>
    </div>
  )
}

export default Navigation