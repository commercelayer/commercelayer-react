/**
 * @class CLayerVariantRadio
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CLayerVariantRadio extends Component {
  static propTypes = {
    ContainerTag: PropTypes.oneOf(['div', 'span']),
    RadioContainerTag: PropTypes.oneOf(['div', 'span']),
    skus: PropTypes.array
  }

  static defaultProps = {
    ContainerTag: "div",
    RadioContainerTag: "div"
  }

  render() {
    const {
      ContainerTag,
      RadioContainerTag,
      skus
    } = this.props

    return (
      <ContainerTag className="clayer-variant-select-radio-container">
        {
          skus.map(function(sku, index){
            return (
              <RadioContainerTag className="clayer-variant-select-radio" key={"clayer-variant-select-radio-" + sku.code} id={"clayer-variant-select-radio-" + sku.code}>
                <input className="clayer-variant" id={"clayer-variant-" + sku.code} name="variant" type="radio" data-sku-code={sku.code} data-sku-name={sku.name} />
                <label htmlFor={"clayer-variant-" + sku.code}>{sku.label}</label>
              </RadioContainerTag>
            )
          })
        }
      </ContainerTag>
    )
  }
}
