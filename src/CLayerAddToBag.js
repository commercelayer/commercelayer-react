/**
 * @class CLayerAddToBag
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CLayerAddToBag extends Component {
  static propTypes = {
    text: PropTypes.string
  }
  static defaultProps = {
    text: 'Add to bag',
  }
  render() {
    const {
      text
    } = this.props

    return (
      <a href="#" className="clayer-add-to-bag">{text}</a>
    )
  }
}
