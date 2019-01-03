/**
 * @class ShoppingBagItemTotalAmount
 */

import React, { Component } from 'react'

export default class ShoppingBagItemTotalAmount extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="clayer-shopping-bag-item-total-amount"></div>
    )
  }
}
