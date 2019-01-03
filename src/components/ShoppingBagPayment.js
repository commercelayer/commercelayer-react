/**
 * @class ShoppingBagPayment
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ShoppingBagPayment extends Component {
  shouldComponentUpdate() {
    return false;
  }

  static propTypes = {
    ContainerTag: PropTypes.oneOf(['div', 'span']),
    defaultText: PropTypes.string
  }

  static defaultProps = {
    ContainerTag: "div",
    defaultText: "0"
  }

  render() {

    const {
      ContainerTag,
      defaultText
    } = this.props

    return (
      <ContainerTag id="clayer-shopping-bag-payment">
        {defaultText}
      </ContainerTag>
    )
  }
}
