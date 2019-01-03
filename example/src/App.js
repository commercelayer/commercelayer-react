import React, { Component } from 'react'

import {
  CLayerConfig,
  CLayerPrice,
  CLayerVariantSelect,
  CLayerVariantRadio,
  CLayerVariantHidden,
  CLayerAvailabilityMessage,
  CLayerAddToBag
} from 'commercelayer-react'

import AvailableMessageTemplate from './components/AvailableMessageTemplate'
import ShoppingBagSummary from './components/ShoppingBagSummary'

export default class App extends Component {
  render () {
    return (
      <div>
        <CLayerConfig
          baseUrl="https://static-commerce.commercelayer.io"
          clientId="351020e9c84f2076755083f08bfe8e47365a76395db1059c3219c37abff86534"
          marketId="185"
          countryCode="US"
          languageCode="en"
          cartUrl="https://example.com/cart"
          returnUrl="https://example.com/return"
          privacyUrl="https://example.com/privacy"
          termsUrl="https://example.com/terms" />
        <hr/>
        <CLayerPrice
          ContainerTag="span"
          skuCode="TSHIRTMM000000FFFFFFMXXX"/>
        <hr/>
        <CLayerVariantSelect skus={[
          {code: "XXX", name: "XXX Name", label: "XXX Label"},
          {code: "YYY", name: "YYY Name", label: "YYY Label"},
          {code: "ZZZ", name: "ZZZ Name", label: "ZZZ Label"}]} />
        <hr/>
        <CLayerVariantRadio skus={[
          {code: "XXX", name: "XXX Name", label: "XXX Label"},
          {code: "YYY", name: "YYY Name", label: "YYY Label"},
          {code: "ZZZ", name: "ZZZ Name", label: "ZZZ Label"}]} />
        <hr/>
        <CLayerVariantHidden sku={{code: "XXX", name: "XXX Name", label: "XXX Label"}} />
        <hr/>
        <CLayerAvailabilityMessage
          // ContainerTag="span"
          // TemplateTag="div"
          availableTemplate={
            <AvailableMessageTemplate
              availableInText="Disponibile in"
              displayShippingMethodPrice={false} />
          }
          unavailableTemplate={
            <p>The selected SKU is not available</p>
          } />
        <hr/>
        <CLayerAddToBag
          text="Aggiungi al carrello" />
        <hr/>
        <ShoppingBagSummary/>
      </div>
    )
  }
}
