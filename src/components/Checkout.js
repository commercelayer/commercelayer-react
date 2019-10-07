/**
 * @class Checkout
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Checkout extends Component {
	shouldComponentUpdate() {
		return false
	}

	static propTypes = {
		text: PropTypes.string,
		className: PropTypes.string,
		onClick: PropTypes.func
	}
	static defaultProps = {
		text: 'Proceed to checkout'
	}
	render() {
		const { text, className, onClick } = this.props

		return (
			<a
				href='#'
				className={`clayer-shopping-bag-checkout ${className}`}
				onClick={onClick}
			>
				{text}
			</a>
		)
	}
}
