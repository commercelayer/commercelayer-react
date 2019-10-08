/**
 * @class VariantSelect
 */

import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class VariantSelect extends Component {
		shouldComponentUpdate() {
				return false
		}
		static propTypes = {
				PriceContainerId: PropTypes.string,
				AvailabilityMessageContainerId: PropTypes.string,
				AddToBagId: PropTypes.string,
				promptText: PropTypes.string,
				skus: PropTypes.array,
				className: PropTypes.string,
				AddToBagQuatityId: PropTypes.string
		}
		static defaultProps = {
				promptText: 'Select variant'
		}
		render() {
				const {
						PriceContainerId,
						AvailabilityMessageContainerId,
						AddToBagId,
						promptText,
						skus,
						className,
						AddToBagQuatityId
				} = this.props

				return (
						<select
								className={`clayer-variant-select ${className}`}
								defaultValue=''
								name='variant'
								data-price-container-id={PriceContainerId}
								data-availability-message-container-id={AvailabilityMessageContainerId}
								data-add-to-bag-id={AddToBagId}
								data-add-to-bag-quantity-id={AddToBagQuatityId}>
								<option value='' disabled>
										{promptText}
								</option>
								{skus.map((sku, index) => {
										return (
												<option
														key={index}
														className={`clayer-variant ${sku.className}`}
														value={sku.label}
														data-sku-code={sku.code}
														data-sku-name={sku.name}
														data-sku-reference={sku.reference}
														data-sku-image-url={sku.imageUrl}>
														{sku.label}
												</option>
										)
								})}
						</select>
				)
		}
}
