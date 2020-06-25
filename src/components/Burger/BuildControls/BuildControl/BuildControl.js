import React from 'react';
import styles from './BuildControl.module.css'

const buildControl = (props) => (
  <div className={styles.BuildControl}>
  <div className={styles.Label}>{props.label}</div>
  <button onClick={props.remove} className={styles.Less} disabled={props.disabled}>-</button>
  <button onClick={props.add} className={styles.More} >+</button>
  </div>


)


export default buildControl;
