/**
 * @class ShoppingBagItemRemove
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ShoppingBagItemRemove extends Component {
  shouldComponentUpdate() {
    return false;
  }

  static propTypes = {
    text: PropTypes.string
  }

  static defaultProps = {
    text: "remove"
  }

  render() {

    const {
      text
    } = this.props

    return (
      <a href="#" className="clayer-shopping-bag-item-remove">{text}</a>
    )
  }
}
