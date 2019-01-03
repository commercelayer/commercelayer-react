/**
 * @class ShoppingBagItemName
 */

import React, { Component } from 'react'

export default class ShoppingBagItemName extends Component {
  shouldComponentUpdate() {
    return false;
  }
  
  render() {
    return (
      <div className="clayer-shopping-bag-item-name"></div>
    )
  }
}
