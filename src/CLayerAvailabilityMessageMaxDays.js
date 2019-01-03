/**
 * @class CLayerAvailabilityMessageMaxDays
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CLayerAvailabilityMessageMaxDays extends Component {
  static propTypes = {
    ContainerTag: PropTypes.oneOf(['span', 'div'])
  }

  static defaultProps = {
    ContainerTag: "span"
  }

  render() {

    const {
      ContainerTag,
    } = this.props

    return (
      <ContainerTag className="clayer-availability-message-available-max-days"></ContainerTag>
    )
  }
}
