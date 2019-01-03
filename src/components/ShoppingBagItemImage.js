/**
 * @class ShoppingBagItemImage
 */

import React, { Component } from 'react'

export default class ShoppingBagItemImage extends Component {
  shouldComponentUpdate() {
    return false;
  }  

  render() {
    return (
      <img className="clayer-shopping-bag-item-image" />
    )
  }
}
