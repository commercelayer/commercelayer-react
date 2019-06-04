/**
 * @class AddToBag
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AddToBag extends Component {
  shouldComponentUpdate() {
    return false;
  }

  static propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
    skuCode: PropTypes.string,
    skuName: PropTypes.string,
    skuReference: PropTypes.string,
    skuImageUrl: PropTypes.string,
    AvailabilityMessageContainerId: PropTypes.string
  }
  static defaultProps = {
    text: 'Add to bag',
  }
  render() {
    const {
      id,
      text,
      skuCode,
      skuName,
      skuReference,
      skuImageUrl,
      AvailabilityMessageContainerId
    } = this.props

    return (
      <a href="#" className="clayer-add-to-bag"
                  id={id}
                  data-sku-code={skuCode}
                  data-sku-name={skuName}
                  data-sku-reference={skuReference}
                  data-sku-image-url={skuImageUrl}
                  data-availability-message-container-id={AvailabilityMessageContainerId}>{text}</a>
    )
  }
}
