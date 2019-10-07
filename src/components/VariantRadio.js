/**
 * @class VariantRadio
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class VariantRadio extends Component {
	shouldComponentUpdate() {
		return false
	}

	static propTypes = {
		text: PropTypes.string,
		skuCode: PropTypes.string,
		skuName: PropTypes.string,
		skuReference: PropTypes.string,
		skuImageUrl: PropTypes.string,
		AvailabilityMessageContainerId: PropTypes.string,
		AddToBagId: PropTypes.string,
		AddToBagQuatityId: PropTypes.string,
		className: PropTypes.string
	}

	static defaultProps = {}

	render() {
		const {
			text,
			skuCode,
			skuName,
			skuReference,
			skuImageUrl,
			PriceContainerId,
			AvailabilityMessageContainerId,
			AddToBagId,
			className,
			AddToBagQuatityId
		} = this.props

		return (
			<label>
				<input
					className={`clayer-variant clayer-variant-radio ${className}`}
					name='variant'
					type='radio'
					data-sku-code={skuCode}
					data-sku-name={skuName}
					data-sku-reference={skuReference}
					data-sku-image-url={skuImageUrl}
					data-price-container-id={PriceContainerId}
					data-availability-message-container-id={
						AvailabilityMessageContainerId
					}
					data-add-to-bag-id={AddToBagId}
					data-add-to-bag-quantity-id={AddToBagQuatityId}
				/>
				{text}
			</label>
		)
	}
}
