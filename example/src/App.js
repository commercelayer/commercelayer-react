import React, { Component } from 'react'
import * as CLayer from 'commercelayer-react'

export default class App extends Component {

  render () {
    return (
      <div>
        <hr/>
        <CLayer.Price skuCode="BABYONBU000000FFFFFFNBXX"/>
        <hr/>
        <CLayer.VariantSelect skus={[
          {code: "BABYONBU000000FFFFFFNBXX", name: "Black Baby Onesie Short Sleeve with White Logo (New born)", label: "New born"},
          {code: "BABYONBU000000FFFFFF6MXX", name: "Black Baby Onesie Short Sleeve with White Logo (6 Months)", label: "6 Months"},
          {code: "BABYONBU000000FFFFFF12MX", name: "Black Baby Onesie Short Sleeve with White Logo (12 Months)", label: "12 Months"}]} />
        <hr/>
        <CLayer.AvailabilityMessage
          availableTemplate={
            <div>
              Available in <CLayer.AvailabilityMessageMinDays />-<CLayer.AvailabilityMessageMaxDays /> days with <CLayer.AvailabilityMessageShippingMethodName /> (<CLayer.AvailabilityMessageShippingMethodPrice/>)
            </div>
          }
          unavailableTemplate={
            <p>The selected SKU is not available</p>
          } />
        <hr/>
        <CLayer.AddToBag />
        <hr/>
        <CLayer.ShoppingBagItemsCount />
        <CLayer.ShoppingBagSubtotal />
        <CLayer.ShoppingBagShipping />
        <CLayer.ShoppingBagPayment />
        <CLayer.ShoppingBagDiscount />
        <CLayer.ShoppingBagTaxes />
        <CLayer.ShoppingBagTotal />
        <hr/>
        <CLayer.ShoppingBagItems
          itemTemplate={
            <div>
              <CLayer.ShoppingBagItemImage />
              <CLayer.ShoppingBagItemName />
              <CLayer.ShoppingBagItemUnitAmount />
              <CLayer.ShoppingBagItemQtyContainer />
              <CLayer.ShoppingBagItemRemove />
              <CLayer.ShoppingBagItemTotalAmount />
            </div>
          }
        />
        <hr/>
        <CLayer.Checkout/>
        <hr/>
        <CLayer.Config
          baseUrl="https://dato-commerce.commercelayer.io"
          clientId="4105df911df6056f8bd9a233ac4edd90c9693fecfc5ecfffcba3e3ae4af45827"
          marketId="156"
          countryCode="US"
          languageCode="en"
          cartUrl="https://example.com/cart"
          returnUrl="https://example.com/return"
          privacyUrl="https://example.com/privacy"
          termsUrl="https://example.com/terms" />
      </div>
    )
  }
}
