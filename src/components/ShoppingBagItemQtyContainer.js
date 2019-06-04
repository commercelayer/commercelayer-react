/**
 * @class ShoppingBagItemQtyContainer
 */

import React, { Component } from 'react'

export default class ShoppingBagItemQtyContainer extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="clayer-shopping-bag-item-qty-container">
        <span className="clayer-shopping-bag-item-availability-message-container"></span>
      </div>
    )
  }
}
