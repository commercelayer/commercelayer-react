/**
 * @class ShoppingBagItemsCount
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ShoppingBagItemsCount extends Component {
  shouldComponentUpdate() {
    return false;
  }

  static propTypes = {
    ContainerTag: PropTypes.oneOf(['span', 'div']),
    defaultText: PropTypes.string
  }

  static defaultProps = {
    ContainerTag: "span",
    defaultText: "0"
  }

  render() {

    const {
      ContainerTag,
      defaultText
    } = this.props

    return (
      <ContainerTag id="clayer-shopping-bag-items-count">
        {defaultText}
      </ContainerTag>
    )
  }
}
