/**
 * @class AvailabilityMessageAvailableTemplate
 */

import React, { Component } from 'react'
import { renderToString } from 'react-dom/server'
import PropTypes from 'prop-types'
import { Template } from '../utils'

export default class AvailabilityMessageAvailableTemplate extends Component {
  shouldComponentUpdate() {
    return false;
  }

  static propTypes = {
    availableTemplate: PropTypes.element
  }

  static defaultProps = {
  }

  render() {
    const {
      availableTemplate
    } = this.props

    return (
      <Template id="clayer-availability-message-available-template">
        { renderToString(availableTemplate) }
      </Template>
    )
  }
}
