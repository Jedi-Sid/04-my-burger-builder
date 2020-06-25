import React from 'react'
import Logo from 'components/Logo/logo.js'
import NavItems from 'components/Navigation/NavItems/NavItems.js'
import styles from './SideDrawer.module.css'
import Backdrop from 'components/UI/Backdrop/Backdrop'


const sideDrawer = (props) => {

    let attachedStyles = [styles.SideDrawer, styles.Close];

    if(props.open) {

      attachedStyles = [styles.SideDrawer, styles.Open];

    }

  return (
    <React.Fragment>
    <div className={attachedStyles.join(' ')}>
      <div className={styles.Logo}>
      <Logo />
      </div>
      <nav>
        <NavItems />
      </nav>
    </div>
    <Backdrop show={props.open} clicked={props.closeSideDrawerHandler}/>
    </React.Fragment>

  );

}

export default sideDrawer;
