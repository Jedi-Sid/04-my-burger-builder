import React, {Component} from 'react';
import Burger from 'components/Burger/Burger'
import BuildControls from 'components/Burger/BuildControls/BuildControls'
import Modal from 'components/UI/Modal/Modal'
import OrderSummary from 'components/Burger/OrderSummary/OrderSummary'
import axios from 'axios-orders.js'
import Spinner from 'components/UI/Spinner/Spinner'
import withErrorHandler from 'hoc/withErrorHandler/withErrorHandler'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.5,
  meat: 1.5,
  bacon: 1.25
}

class BurgerBuilder extends Component {

  state = {
    ingredients: null,
    totalPrice: 4,
    confirmPurchase: false,
    canPurchase: false,
    loading: false,
    error: false
  }

  componentDidMount() {
    axios.get('https://my-burger-builder-70fab.firebaseio.com/ingredients.json').then(response => {
      this.setState({ingredients: response.data})
    })
    .catch(error => {
      this.setState({error:true})
    })

  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };

    updatedIngredients[type] = updatedCount;

    this.setState({ingredients: updatedIngredients})

    const priceIncrease = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceIncrease;

    this.setState({totalPrice: newPrice})
    this.updateCanPurchase(updatedIngredients);

  }

  removeIngredientHandler = (type) => {

    if (this.state.ingredients[type] > 0) {

      const oldCount = this.state.ingredients[type];
      const updatedCount = oldCount - 1;
      const updatedIngredients = {
        ...this.state.ingredients
      };

      updatedIngredients[type] = updatedCount;

      this.setState({ingredients: updatedIngredients})

      const priceDecrease = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceDecrease;

      this.setState({totalPrice: newPrice})
      this.updateCanPurchase(updatedIngredients);
    }
  }

  updateCanPurchase = (ingredients) => {
    const sum = Object.keys(ingredients).map(el => {
      return ingredients[el];
    }).reduce((sum, el) => {
      return sum + el;
    }, 0);
    this.setState({
      canPurchase: sum > 0
    })
  }

  purchaseHandler = () => {
    this.setState({confirmPurchase: true})
  }

  purchaseCancelHandler = () => {
    this.setState({confirmPurchase: false})
  }

  purchaseContinueHandler = () => {
    this.setState({loading: true});

    //  alert('Continue!')
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Sid',
        address: {
          street: 'Tester Road',
          zipCode: '12345',
          country: 'UK'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }

    axios.post('orders.json', order).then(response => {
      this.setState({loading: false, confirmPurchase: false})
    }).catch(error => {
      this.setState({loading: false, confirmPurchase: false})
    });
  }

  render() {

    const disabledIngredient = {
      ...this.state.ingredients
    };
    for (let key in disabledIngredient) {
      disabledIngredient[key] = disabledIngredient[key] <= 0;
    }


    let orderSummary = null;
    let burger = this.state.error ? <p>Something went wrong</p> : <Spinner/>;

    if (this.state.ingredients) {
      burger = (<React.Fragment><Burger ingredients={this.state.ingredients}/><BuildControls addIngredient={this.addIngredientHandler} removeIngredient={this.removeIngredientHandler} diabled={disabledIngredient} canPurchase={this.state.canPurchase} confirmPurchase={this.setState.confirmPurchase} purchaseHandler={this.purchaseHandler} price={this.state.totalPrice}/></React.Fragment>)
       orderSummary = <OrderSummary ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} cancelPurchase={this.purchaseCancelHandler} continuePurchase={this.purchaseContinueHandler}/>
    }

    if (this.state.loading) {
      orderSummary = <Spinner/>
    }

    return (<React.Fragment>
      <Modal modalClosed={this.purchaseCancelHandler} show={this.state.confirmPurchase}>
        {orderSummary}
      </Modal>
      {burger}
    </React.Fragment>);

  }

}

export default withErrorHandler(BurgerBuilder, axios);
