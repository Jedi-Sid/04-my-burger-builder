import React from 'react';
import styles from './Toolbar.module.css'
import Logo from 'components/Logo/logo'
import NavItems from 'components/Navigation/NavItems/NavItems'
import Menu from 'components/Navigation/SideDrawer/Menu/Menu.js'


const toolbar = (props) => (
  <header className={styles.Toolbar}>
    <Menu onClick={props.openSideDrawerHandler} />
    <div className={styles.Logo}>
      <Logo />
    </div>
    <nav className={styles.DesktopOnly}>
      <NavItems />
    </nav>
  </header>

);

export default toolbar;
