/**
 * @class Price
 */

import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Price extends Component {
		shouldComponentUpdate() {
				return false
		}

		static propTypes = {
				ContainerTag: PropTypes.oneOf(['div', 'span']),
				AmountTag: PropTypes.oneOf(['div', 'span']),
				skuCode: PropTypes.string,
				className: PropTypes.string,
				AmountProps: PropTypes.shape({
						amount: PropTypes.shape({className: PropTypes.string}),
						compare: PropTypes.shape({className: PropTypes.string})
				})
		}

		static defaultProps = {
				ContainerTag: 'div',
				AmountTag: 'span',
				AmountProps: {
						amount: {
								className: ''
						},
						compare: {
								className: ''
						}
				}
		}

		render() {
				const {
						ContainerTag,
						AmountTag,
						skuCode,
						className,
						AmountProps: {
								amount,
								compare
						}
				} = this.props

				return (
						<ContainerTag className={`clayer-price ${className}`} data-sku-code={skuCode}>
								<AmountTag className={`amount ${amount.className}`}/>
								<AmountTag className={`compare-at-amount ${compare.className}`}/>
						</ContainerTag>
				)
		}
}
