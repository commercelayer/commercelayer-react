/**
 * @class VariantSelect
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class VariantSelect extends Component {
  shouldComponentUpdate() {
    return false;
  }

  static propTypes = {
    skus: PropTypes.array
  }

  render() {
    const {
      skus
    } = this.props

    return (
      <select className="clayer-variant-select">
        {
          skus.map(function(sku, index){
            return <option className="clayer-variant" id={"clayer-variant-" + sku.code} key={"clayer-variant-" + sku.code}  data-sku-code={sku.code} data-sku-name={sku.name}>{sku.label}</option>
          })
        }
      </select>
    )
  }
}
