import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.css';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
];





const buildControls = (props) => (



  <div className={styles.BuildControls}>
  <p>Current Price: £{props.price.toFixed(2)}</p>
      {controls.map(el => (
        <BuildControl
            key={el.label}
            label={el.label}
            add={() => props.addIngredient(el.type)}
            remove={() => props.removeIngredient(el.type)}
            disabled={props.diabled[el.type]}
            />

      )) }
      <button
        className={styles.OrderButton}
        disabled={!props.canPurchase}
        onClick={props.purchaseHandler}>ORDER NOW</button>
  </div>



)





export default buildControls;
