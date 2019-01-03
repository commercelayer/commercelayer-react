/**
 * @class CLayerAvailabilityMessage
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CLayerAvailabilityMessage extends Component {
  static propTypes = {
    ContainerTag: PropTypes.oneOf(['div', 'span']),
    TemplateTag: PropTypes.oneOf(['template', 'div', 'span']),
    availableTemplate: PropTypes.element,
    unavailableTemplate: PropTypes.element
  }

  static defaultProps = {
    ContainerTag: "div",
    TemplateTag: "template"
  }

  render() {
    const {
      availableTemplate,
      unavailableTemplate,
      ContainerTag,
      TemplateTag
    } = this.props

    return (
      <ContainerTag id="clayer-availability-message-container">
        <TemplateTag id="clayer-availability-message-available-template">
          { availableTemplate }
        </TemplateTag>
        <TemplateTag id="clayer-availability-message-unavailable-template">
          { unavailableTemplate }
        </TemplateTag>
      </ContainerTag>
    )
  }
}
