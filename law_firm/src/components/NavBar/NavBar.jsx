import React from 'react';
import Logo from '../Logo/Logo';
import styles from './NavBar.module.css';
import Button from '../Button/Button';
import Navigation from './Navigation/Navigation';

const NavBar = () => {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <Navigation />
      <Button children={"Contact Now"} />
    </div>
  )
}

export default NavBar