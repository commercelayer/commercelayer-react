/**
 * @class AvailabilityMessage
 */

import React, { Component } from 'react'
import { renderToString } from 'react-dom/server'
import PropTypes from 'prop-types'
import { Template } from '../utils'

export default class AvailabilityMessage extends Component {
  shouldComponentUpdate() {
    return false;
  }

  static propTypes = {
    ContainerTag: PropTypes.oneOf(['div', 'span']),
    availableTemplate: PropTypes.element,
    unavailableTemplate: PropTypes.element
  }

  static defaultProps = {
    ContainerTag: "div"
  }

  render() {
    const {
      availableTemplate,
      unavailableTemplate,
      ContainerTag
    } = this.props

    return (
      <ContainerTag id="clayer-availability-message-container">
        <Template id="clayer-availability-message-available-template">
          { renderToString(availableTemplate) }
        </Template>
        <Template id="clayer-availability-message-unavailable-template">
          { renderToString(unavailableTemplate) }
        </Template>
      </ContainerTag>
    )
  }
}
