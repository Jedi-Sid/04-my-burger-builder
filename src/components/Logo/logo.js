import React from 'react';
import styles from './logo.module.css';
import burgerLogo from 'assets/images/original.png';

const logo = (props) => (
  <div className={styles.Logo}>
    <img src={burgerLogo} />
  </div>

)


export default logo;
