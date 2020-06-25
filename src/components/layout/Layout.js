import React, {Component} from 'react';
import Aux from 'hoc/Aux';
import styles from './Layout.module.css'
import Toolbar from 'components/Navigation/Toolbar/Toolbar'
import SideDrawer from 'components/Navigation/SideDrawer/SideDrawer.js'

class Layout extends Component {

  state = {
    showSideDrawer: false
  }

  closeSideDrawerHandler = () => {
    this.setState({showSideDrawer: false});
  }

  openSideDrawerHandler = () => {
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer
      }
    });
  }

  render() {
    return (<Aux>
      <Toolbar openSideDrawerHandler={this.openSideDrawerHandler}/>
      <SideDrawer open={this.state.showSideDrawer} closeSideDrawerHandler={this.closeSideDrawerHandler}/>
      <main className={styles.Content}>
        {this.props.children}
      </main>
    </Aux>)

  }

};

export default Layout;
