/**
 * @class ShoppingBagItems
 */

import React, { Component } from 'react'
import { renderToString } from 'react-dom/server'
import PropTypes from 'prop-types'
import { Template } from '../utils'

export default class ShoppingBagItems extends Component {
  shouldComponentUpdate() {
    return false;
  }

  static propTypes = {
    ContainerTag: PropTypes.oneOf(['div', 'span']),
    ItemsContainerTag: PropTypes.oneOf(['div', 'table']),
    itemTemplate: PropTypes.element
  }

  static defaultProps = {
    ContainerTag: "div",
    ItemsContainerTag: "div",
  }

  render() {

    const {
      ContainerTag,
      ItemsContainerTag,
      itemTemplate
    } = this.props

    return (
      <ContainerTag id="clayer-shopping-bag-container">
        <ItemsContainerTag id="clayer-shopping-bag-items-container">
          <Template id="clayer-shopping-bag-item-template">
            { renderToString(itemTemplate) }
          </Template>
        </ItemsContainerTag>
      </ContainerTag>
    )
  }
}
