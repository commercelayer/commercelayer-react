/**
 * @class ShoppingBagSummary
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  CLayerShoppingBagItemsCount,
  CLayerShoppingBagSubtotal,
  CLayerShoppingBagShipping,
  CLayerShoppingBagPayment,
  CLayerShoppingBagDiscount,
  CLayerShoppingBagTaxes,
  CLayerShoppingBagTotal
} from 'commercelayer-react'

export default class ShoppingBagSummary extends Component {
  static propTypes = {
    itemsCountText: PropTypes.string,
    subtotalText: PropTypes.string,
    shippingText: PropTypes.string,
    paymentText: PropTypes.string,
    discountText: PropTypes.string,
    taxesText: PropTypes.string,
    totalText: PropTypes.string
  }

  static defaultProps = {
    itemsCountText: "Items",
    subtotalText: "Subtotal",
    shippingText: "Shipping",
    paymentText: "Payment",
    discountText: "Discount",
    taxesText: "Taxes",
    totalText: "Total"
  }

  render() {
    const {
      itemsCountText,
      subtotalText,
      shippingText,
      paymentText,
      discountText,
      taxesText,
      totalText
    } = this.props

    return (
      <dl id="shopping-bag-summary">
        <dt>{itemsCountText}</dt>
        <dd><CLayerShoppingBagItemsCount defaultText="$0.00"/></dd>
        <dt>{subtotalText}</dt>
        <dd><CLayerShoppingBagSubtotal defaultText="$0.00"/></dd>
        <dt>{shippingText}</dt>
        <dd><CLayerShoppingBagShipping defaultText="$0.00"/></dd>
        <dt>{paymentText}</dt>
        <dd><CLayerShoppingBagPayment defaultText="$0.00"/></dd>
        <dt>{discountText}</dt>
        <dd><CLayerShoppingBagDiscount defaultText="$0.00"/></dd>
        <dt>{taxesText}</dt>
        <dd><CLayerShoppingBagTaxes defaultText="$0.00"/></dd>
        <dt>{totalText}</dt>
        <dd><CLayerShoppingBagTotal defaultText="$0.00"/></dd>
      </dl>
    )
  }
}

export {ShoppingBagSummary}
