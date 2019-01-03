/**
 * @class AvailableMessageTemplate
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  CLayerAvailabilityMessageMinDays,
  CLayerAvailabilityMessageMaxDays,
  CLayerAvailabilityMessageShippingMethodName,
  CLayerAvailabilityMessageShippingMethodPrice
} from 'commercelayer-react'


export default class AvailableMessageTemplate extends Component {
  static propTypes = {
    availableInText: PropTypes.string,
    availableDaysText: PropTypes.string,
    displayShippingMethodName: PropTypes.bool,
    displayShippingMethodPrice: PropTypes.bool
  }

  static defaultProps = {
    availableInText: 'Available in',
    availableDaysText: 'days',
    displayShippingMethodName: true,
    displayShippingMethodPrice: true
  }

  render() {
    const {
      availableInText,
      availableDaysText,
      displayShippingMethodName,
      displayShippingMethodPrice
    } = this.props

    return (
      <div>
        {availableInText}
        <CLayerAvailabilityMessageMinDays ContainerTag="div"/>
        -
        <CLayerAvailabilityMessageMaxDays ContainerTag="div"/>
        {availableDaysText}
        {displayShippingMethodName &&
          <CLayerAvailabilityMessageShippingMethodName/>
        }
        {displayShippingMethodPrice &&
          <span>
            (<CLayerAvailabilityMessageShippingMethodPrice/>)
          </span>
        }
      </div>
    )
  }
}

export {AvailableMessageTemplate}
