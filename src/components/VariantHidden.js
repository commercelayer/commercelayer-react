/**
 * @class VariantHidden
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class VariantHidden extends Component {
  shouldComponentUpdate() {
    return false;
  }

  static propTypes = {
    sku: PropTypes.object
  }

  render() {
    const {
      sku
    } = this.props

    return (
      <input className="clayer-variant" name="variant" id={"clayer-variant-" + sku.code} type="hidden" data-sku-code={sku.code} data-sku-name={sku.name} />
    )
  }
}
