import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

  let ingredientsArray = Object.keys(props.ingredients).map(key => {
    return [...Array(props.ingredients[key])].map((_, i) => {
      return <BurgerIngredient key={key + i} type={key}/>;
    });
  }).reduce((prev, curr) => {
    return prev.concat(curr)
  }, []);

  if (ingredientsArray.length === 0) {
    ingredientsArray = <p>Please add ingredients!</p>
  }

  console.log(ingredientsArray);

  return (<div className={styles.Burger}>
    <BurgerIngredient type="bread-top"/> {ingredientsArray}
    <BurgerIngredient type="bread-bottom"/>

  </div>);
}

export default burger;
