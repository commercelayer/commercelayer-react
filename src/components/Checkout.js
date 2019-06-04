/**
 * @class Checkout
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Checkout extends Component {
  shouldComponentUpdate() {
    return false;
  }

  static propTypes = {
    text: PropTypes.string
  }
  static defaultProps = {
    text: 'Proceed to checkout',
  }
  render() {
    const {
      text
    } = this.props

    return (
      <a href="#" className="clayer-shopping-bag-checkout">{text}</a>
    )
  }
}
