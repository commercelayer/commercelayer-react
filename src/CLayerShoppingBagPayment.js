/**
 * @class CLayerShoppingBagPayment
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CLayerShoppingBagPayment extends Component {
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
