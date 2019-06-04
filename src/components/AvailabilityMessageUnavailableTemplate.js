/**
 * @class AvailabilityMessageUnavailableTemplate
 */

import React, { Component } from 'react'
import { renderToString } from 'react-dom/server'
import PropTypes from 'prop-types'
import { Template } from '../utils'

export default class AvailabilityMessageUnavailableTemplate extends Component {
  shouldComponentUpdate() {
    return false;
  }

  static propTypes = {
    unavailableTemplate: PropTypes.element
  }

  static defaultProps = {
  }

  render() {
    const {
      unavailableTemplate
    } = this.props

    return (
      <Template id="clayer-availability-message-unavailable-template">
        { renderToString(unavailableTemplate) }
      </Template>
    )
  }
}
