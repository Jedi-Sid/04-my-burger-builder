import React, {Component} from 'react';
import Button from 'components/UI/Button/Button';

class OrderSummary extends Component {
  componentWillUpdate() {
    console.log('[OrderSummery] Will Update')

  }

  render() {
    const ingSummary = Object.keys(this.props.ingredients).map(el => {
      return <li key={el}>
        <span style={{
            textTransform: 'capitalize'
          }}>{el}</span>
        : {this.props.ingredients[el]}</li>
    });

    return (<React.Fragment>
      <h3>Your Order</h3>
      <p>Your burger has the following:</p>
      <ul>
        {ingSummary}
      </ul>
      <p>Your burger costs: £{this.props.totalPrice.toFixed(2)}</p>
      <p>continue to checkout</p>
      <Button btnType="Danger" onClick={this.props.cancelPurchase}>CANCEL</Button>
      <Button btnType="Success" onClick={this.props.continuePurchase}>CONTINUE</Button>
    </React.Fragment>)

  }

}

export default OrderSummary;
