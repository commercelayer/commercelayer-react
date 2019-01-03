/**
 * @class Config
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Config extends Component {
  shouldComponentUpdate() {
    return false;
  }
  
  static propTypes = {
    baseUrl: PropTypes.string,
    clientId: PropTypes.string,
    marketId: PropTypes.string,
    countryCode: PropTypes.string,
    languageCode: PropTypes.string,
    cartUrl: PropTypes.string,
    returnUrl: PropTypes.string,
    privacyUrl: PropTypes.string,
    termsUrl: PropTypes.string
  }

  render() {
    const {
      baseUrl,
      clientId,
      marketId,
      countryCode,
      languageCode,
      cartUrl,
      returnUrl,
      privacyUrl,
      termsUrl
    } = this.props

    return (
      <div id="clayer-config"
        data-base-url={baseUrl}
        data-client-id={clientId}
        data-market-id={marketId}
        data-country-code={countryCode}
        data-language-code={languageCode}
        data-cart-url={cartUrl}
        data-return-url={returnUrl}
        data-privacy-url={privacyUrl}
        data-terms-url={termsUrl} >
      </div>
    )
  }
}
