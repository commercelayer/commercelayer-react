/**
 * @class AvailabilityMessageContainer
 */

import React, { Component } from 'react'
import { renderToString } from 'react-dom/server'
import PropTypes from 'prop-types'
import { Template } from '../utils'

export default class AvailabilityMessageContainer extends Component {
  shouldComponentUpdate() {
    return false;
  }

  static propTypes = {
    ContainerTag: PropTypes.oneOf(['div', 'span']),
    id: PropTypes.string
  }

  static defaultProps = {
    ContainerTag: "div"
  }

  render() {
    const {
      ContainerTag,
      id
    } = this.props

    return (
      <ContainerTag className="clayer-availability-message-container" id={id}>
      </ContainerTag>
    )
  }
}
