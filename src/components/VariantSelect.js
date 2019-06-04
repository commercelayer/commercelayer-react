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
    PriceContainerId: PropTypes.string,
    AvailabilityMessageContainerId: PropTypes.string,
    AddToBagId: PropTypes.string,
    promptText: PropTypes.string,
    skus: PropTypes.array,
  }
  static defaultProps = {
    promptText: 'Select variant',
  }
  render() {
    const {
      PriceContainerId,
      AvailabilityMessageContainerId,
      AddToBagId,
      promptText,
      skus
    } = this.props

    return (
      <select className="clayer-variant-select"
              name="variant"
              data-price-container-id={PriceContainerId}
              data-availability-message-container-id={AvailabilityMessageContainerId}
              data-add-to-bag-id={AddToBagId} >
        <option value="" disabled selected>{promptText}</option>
        {
          skus.map(function(sku, index){
            return <option className="clayer-variant"
                           data-sku-code={sku.code}
                           data-sku-name={sku.name}
                           data-sku-reference={sku.reference}
                           data-sku-image-url={sku.imageUrl}>{sku.label}</option>
          })
        }
      </select>
    )
  }
}
