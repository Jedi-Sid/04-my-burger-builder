import React from 'react';
import styles from './NavItem.module.css'

const NavItem = (props) => (
  <li className={styles.NavigationItem}>
    <a
    href={props.link}
    className={props.active ? styles.active : null}>
    {props.children}</a>
  </li>

)


export default NavItem;
